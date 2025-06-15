from flask.views import MethodView
from flask_smorest import Blueprint, abort
from passlib.hash import pbkdf2_sha256
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_required,
    get_jwt,
    get_jwt_identity,
)
from db import db
from models import UserModel, RoleModel, BusinessModel
from schemas import UserSchema, UserLoginSchema
from utils.decorators import role_required
from flask.views import MethodView 

blp = Blueprint("Auth", __name__, url_prefix="/auth", description="Operations on auth models")

# ----- Shared user creation logic -----
def create_business_admin(user_data, business_data=None):
    """Create a business admin, optionally with a new business."""
    if UserModel.query.filter_by(email=user_data["email"]).first():
        abort(409, message="Email already registered")

    role = RoleModel.query.filter_by(role="business_admin").first()
    if not role:
        abort(400, message="Business admin role not found")

    # Validate that either business_id or business_data is provided
    if not business_data and not user_data.get("business_id"):
        abort(400, message="Business admin must be associated with a business")

    try:
        # If we're creating a new business
        if business_data:
            if BusinessModel.query.filter_by(name=business_data["name"]).first():
                abort(409, message="A business with this name already exists")

            # Create admin user first to get the ID
            admin_user = UserModel(
                first_name=user_data["first_name"],
                last_name=user_data["last_name"],
                email=user_data["email"],
                phone_number=user_data["phone_number"],
                user_type="business_admin",
                address=user_data.get("address"),
                password=pbkdf2_sha256.hash(user_data["password"]),
                roles=[role]
            )
            db.session.add(admin_user)
            db.session.flush()  # Get admin_user id

            # Create business
            business = BusinessModel(
                **business_data,
                owner_id=admin_user.id
            )
            db.session.add(business)
            db.session.flush()  # Get business id
            admin_user.business_id = business.id

        # If we're adding admin to existing business
        else:
            business = BusinessModel.query.get(user_data["business_id"])
            if not business:
                abort(404, message="Business not found")
                
            admin_user = UserModel(
                first_name=user_data["first_name"],
                last_name=user_data["last_name"],
                email=user_data["email"],
                phone_number=user_data["phone_number"],
                user_type="business_admin",
                address=user_data.get("address"),
                password=pbkdf2_sha256.hash(user_data["password"]),
                business_id=business.id,
                roles=[role]
            )
            db.session.add(admin_user)

        db.session.commit()
        return {"message": "Business admin created successfully"}, 201
    except Exception as e:
        db.session.rollback()
        abort(400, message=str(e))

def create_user(user_data, required_type=None):
    """Create a regular user (customer or super_admin)."""
    user_type = required_type or user_data.get("user_type")

    if user_type not in ["customer", "super_admin", "business_admin"]:
        abort(400, message=f"Invalid user type: {user_type}")

    if UserModel.query.filter_by(email=user_data["email"]).first():
        abort(409, message="Email already registered")

    role = RoleModel.query.filter_by(role=user_type).first()
    if not role:
        abort(400, message=f"Required role {user_type} not found")

    # Validate business_id for business_admin
    if user_type == "business_admin":
        if not user_data.get("business_id"):
            abort(400, message="business_id is required for business_admin users")
        business = BusinessModel.query.get(user_data["business_id"])
        if not business:
            abort(404, message="Specified business not found")

    user = UserModel(
        first_name=user_data["first_name"],
        last_name=user_data["last_name"],
        email=user_data["email"],
        phone_number=user_data["phone_number"],
        user_type=user_type,
        address=user_data.get("address"),
        password=pbkdf2_sha256.hash(user_data["password"]),
        business_id=user_data.get("business_id"),
        roles=[role],
    )

    try:
        db.session.add(user)
        db.session.commit()
        return {"message": f"{user_type.capitalize()} created successfully"}, 201
    except Exception as e:
        db.session.rollback()
        abort(400, message=str(e))

# ----- Register Endpoint -----
@blp.route("/register")
class RegisterUser(MethodView):
    @blp.arguments(UserSchema)
    def post(self, user_data):
        user_type = user_data.get("user_type")

        if user_type == "business_admin" and user_data.get("business_name"):
            # Special case: Creating a business admin with a new business
            business_data = {
                "name": user_data.pop("business_name"),
                "description": user_data.pop("business_description", "No description available"),
                "email": user_data.get("email"),
                "phone_number": user_data.get("phone_number"),
                "address": user_data.get("address"),
                "status": "active"
            }

            # Create business and user in a transaction
            try:
                admin_user = UserModel(
                    first_name=user_data["first_name"],
                    last_name=user_data["last_name"],
                    email=user_data["email"],
                    phone_number=user_data["phone_number"],
                    user_type="business_admin",
                    address=user_data.get("address"),
                    password=pbkdf2_sha256.hash(user_data["password"]),
                )
                db.session.add(admin_user)
                db.session.flush()  # Get admin_user id

                business = BusinessModel(
                    **business_data,
                    owner_id=admin_user.id
                )
                db.session.add(business)
                db.session.flush()  # Get business id

                admin_user.business_id = business.id
                admin_role = RoleModel.query.filter_by(role="business_admin").first()
                if not admin_role:
                    abort(400, message="business_admin role not found")
                admin_user.roles.append(admin_role)

                db.session.commit()
                return {"message": "Business and admin created successfully"}, 201

            except Exception as e:
                db.session.rollback()
                abort(400, message=str(e))

        # Regular user registration
        if user_type in ["customer", "super_admin"]:
            return create_user(user_data, required_type=user_type)

        return self.register_with_auth(user_data, user_type)

    @jwt_required()
    def register_with_auth(self, user_data, user_type):
        claims = get_jwt()
        current_user_roles = claims.get("roles", [])

        if user_type == "business_admin":
            if "super_admin" not in current_user_roles:
                abort(403, message="Only super admin can create business admin users")
            if not user_data.get("business_id"):
                abort(400, message="Business ID required for business admin")
            return create_user(user_data, required_type="business_admin")

        abort(400, message="Invalid or unauthorized user type.")

# ----- Login Endpoint -----
@blp.route("/login")
class AuthLogin(MethodView):
    @blp.arguments(UserLoginSchema)
    def post(self, login_data):
        user = UserModel.query.filter_by(email=login_data["email"]).first()
        if not user or not pbkdf2_sha256.verify(login_data["password"], user.password):
            abort(401, message="Invalid credentials") 
        claims = {
            "roles": [r.role for r in user.roles],
            "user_type": user.user_type,
            "business_id": user.business_id,
        }

        if user.status != "active" and  user.user_type != "super_admin":
             abort(403, message="Your account has been deactivated. Contact support.")
        
        
        # Add business name for business admins
        if user.user_type == "business_admin" and user.business:
            claims["business_name"] = user.business.name

        tokens = {
            "access_token": create_access_token(
                identity=str(user.id),
                additional_claims=claims
            ),
            "refresh_token": create_refresh_token(identity=str(user.id)),
            "user_type": user.user_type,
            "business_id": user.business_id, 
        }
        return tokens, 200

# ----- Token Refresh Endpoint -----
@blp.route("/refresh")
class TokenRefresh(MethodView):
    @jwt_required(refresh=True)
    def post(self):
        current_user_id = get_jwt_identity()
        user = UserModel.query.get_or_404(current_user_id)

        new_token = {
            "access_token": create_access_token(
                identity=current_user_id,
                additional_claims={
                    "roles": [r.role for r in user.roles],
                    "user_type": user.user_type,
                    "business_id": user.business_id,
                },
            )
        }
        return new_token, 200


@blp.route("/users/<int:user_id>/toggle-status")
class ToggleUsersStatus(MethodView):
    @role_required('super_admin')
    @jwt_required()
    def patch(self, user_id):
        claims = get_jwt()
        if claims.get("user_type") != "super_admin":
            abort(403, message="You are not authorized to perform this action.")
        
        user = UserModel.query.get_or_404(user_id)

        # Toggle between active and inactive
        if user.status == "active":
            user.status = "inactive"
        else:
            user.status = "active"

        db.session.commit()
        return{"message":f"user status change to {user.status}"}