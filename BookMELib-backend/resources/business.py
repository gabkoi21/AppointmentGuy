from flask.views import MethodView
from flask_smorest import Blueprint, abort
from flask_jwt_extended import get_jwt_identity, jwt_required
from passlib.hash import pbkdf2_sha256
from flask import request, jsonify

from db import db
from models import UserModel, RoleModel, BusinessModel, AppointmentModel
from schemas import BusinessSchema, UserSchema, BusinessUpdateSchema
from utils.decorators import role_required
from sqlalchemy.exc import IntegrityError

# Initialize the Blueprint
blp = Blueprint("Businesses", __name__, url_prefix="/business", description="Operations on businesses")

# ---------------------- Helper Functions ----------------------

def create_business(business_data, owner_id):
    """Create a new business and associate it with the owner (admin user)."""
    # Validate required fields
    if not business_data.get('name'):
        abort(400, message="Business name is required.")
    if not business_data.get('description'):
        abort(400, message="Business description is required.")

    # Check for duplicate business
    if business_data.get("email") and BusinessModel.query.filter_by(email=business_data["email"]).first():
        abort(409, message="A business with this email already exists.")
    if BusinessModel.query.filter_by(name=business_data["name"]).first():
        abort(409, message="A business with this name already exists.")

    # Create business with non-null owner_id
    if not owner_id:
        abort(400, message="Owner ID is required to create a business.")

    business = BusinessModel(
        name=business_data['name'],
        description=business_data['description'],
        address=business_data.get('address'),
        phone_number=business_data.get('phone_number'),
        email=business_data.get('email'),
        about=business_data.get('about', "No information available"),
        status='active',  
        owner_id=owner_id
    )
    
    db.session.add(business)
    return business


def create_admin_user(admin_data, business=None):
    """Create an admin user and associate it with a business."""
    if UserModel.query.filter_by(email=admin_data['email']).first():
        abort(409, message="A user with this email already exists.")

    admin_role = RoleModel.query.filter_by(role='business_admin').first()
    if not admin_role:
        abort(404, message="Admin role not found.")

    admin_user = UserModel(
        email=admin_data['email'],
        password=pbkdf2_sha256.hash(admin_data['password']),
        first_name=admin_data['first_name'],
        last_name=admin_data['last_name'],
        phone_number=admin_data["phone_number"],
        user_type="business_admin",
        address=admin_data.get('address'),
        status='active',  # Set a default status
        business_id=business.id if business else None,  # Explicitly set business_id
        roles=[admin_role]  # Add role directly in constructor
    )

    db.session.add(admin_user)
    return admin_user

# ---------------------- Routes ----------------------

@blp.route('/create')
class CreateBusiness(MethodView):
    @blp.arguments(BusinessSchema)
    @blp.response(201, BusinessSchema)
    @role_required('super_admin')
    def post(self, business_data):
        """Create a new business and assign an admin to it. Accessible only by Super Admin."""
        admin_data = business_data.pop('admin_user')  # Remove admin_user from business_data
        if not admin_data:
            abort(400, message="Admin user data must be provided.")

        try:
            # Start a transaction
            # First create the admin user (without business association)
            admin_user = create_admin_user(admin_data)
            db.session.flush()  # Get the admin_user.id

            # Create the business with the admin as owner
            business = create_business(business_data, admin_user.id)
            db.session.flush()  # Get the business.id

            # Update the admin user with the business ID
            admin_user.business_id = business.id

            # Commit the transaction
            db.session.commit()
            return business

        except Exception as e:
            db.session.rollback()
            abort(400, message=str(e))
    

@blp.route('/<int:business_id>/add-admin')
class AddAdminToBusiness(MethodView):
    @blp.arguments(UserSchema)
    @blp.response(201, UserSchema)
    @role_required('super_admin')
    def post(self, user_data, business_id):
        """Add an admin to an existing business. Only accessible by Super Admin."""
        business = BusinessModel.query.get_or_404(business_id)
        admin_user = create_admin_user(user_data, business)
        db.session.commit()
        return admin_user
    

@blp.route('/my-business')
class MyBusinessView(MethodView):
    @jwt_required()
    @blp.response(200, BusinessSchema)
    @role_required('business_admin')
    def get(self):
        """Get the business of the logged-in business admin."""
        current_user_id = get_jwt_identity()
        user = UserModel.query.get_or_404(current_user_id)
        if not user.business_id:
            abort(404, message="No business associated with this admin.")
        business = BusinessModel.query.get_or_404(user.business_id)
        return business
    

@blp.route('/<int:business_id>/users')
class BusinessUsersView(MethodView):
    @blp.response(200, UserSchema(many=True))
    @role_required('business_admin')
    def get(self, business_id):
        """Get all users who have appointments with this business."""
        BusinessModel.query.get_or_404(business_id)
        users_with_appointments = (
            UserModel.query
            .join(UserModel.appointments)
            .filter(AppointmentModel.business_id == business_id)
            .distinct()
            .all()
        )
        return users_with_appointments
    
@blp.route('/<int:business_id>/')
class BusinessView(MethodView):
    @blp.response(200, BusinessSchema)
    def get(self, business_id):
        """Get details of a specific business by its ID."""
        business = BusinessModel.query.get_or_404(business_id)
        return business
    

    

@blp.route("/")
class BusinessesList(MethodView):
    @blp.response(200, BusinessSchema(many=True))
    def get(self):
        """Get a list of all businesses."""
        businesses = BusinessModel.query.all()
        return businesses

@blp.route('/update/<int:business_id>')
class BusinessUpdateView(MethodView):
    @blp.arguments(BusinessUpdateSchema)
    @role_required('super_admin')
    def put(self, data, business_id):
        """Update a business. Only accessible by Super Admin."""
        business = BusinessModel.query.get_or_404(business_id)
        for key, value in data.items():
            if key == "password":
                hashed_password = pbkdf2_sha256.hash(value)
                setattr(business, key, hashed_password)
            else:
                setattr(business, key, value)
        db.session.commit()
        return {"message": "Business updated successfully."}


@blp.route('/<int:business_id>')
class BusinessDetails(MethodView):
    @blp.response(200, BusinessSchema)
    @role_required('super_admin')
    def delete(self, business_id):
        """Delete a business and all associated users and roles. Only accessible by Super Admin."""
        business = BusinessModel.query.get_or_404(business_id)
        users = UserModel.query.filter_by(business_id=business_id).all()
        for user in users:
            user.roles.clear()
            db.session.delete(user)
        db.session.delete(business)
        db.session.commit()
        return {"message": "Business and all associated users deleted successfully."}

