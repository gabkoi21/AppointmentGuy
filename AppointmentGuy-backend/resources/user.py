from flask.views import MethodView
from flask_smorest import Blueprint, abort
from passlib.hash import pbkdf2_sha256
from flask_jwt_extended import jwt_required, get_jwt
from sqlalchemy.exc import OperationalError
from db import db
from models import UserModel
from schemas import UserSchema, UserUpdateSchema
from utils.decorators import role_required

blp = Blueprint("User", __name__, url_prefix="/auth", description="Operations on users")

@blp.route("/users/<int:user_id>")
class ManageUser(MethodView):

    @jwt_required()
    @blp.arguments(UserUpdateSchema(partial=True))
    def put(self, user_data, user_id):
        """Update user details (customer, business_admin)"""
        claims = get_jwt()
        current_user_roles = claims.get("roles", [])
        current_user_id = claims.get("sub")

        user = UserModel.query.get_or_404(user_id, description="User not found")

        if not self.is_authorized(user, current_user_id, current_user_roles):
            abort(403, message="Unauthorized to update this user")

        for key, value in user_data.items():
            if key == "password":
                hashed_password = pbkdf2_sha256.hash(value)
                setattr(user, "password_hash", hashed_password)
            else:
                setattr(user, key, value)

        db.session.commit()
        return {"message": "User updated successfully"}, 200

    @jwt_required()
    def delete(self, user_id):
        """Delete a specific user"""
        try:
            claims = get_jwt()
            current_user_roles = claims.get("roles", [])
            current_user_id = claims.get("sub")

            user = UserModel.query.get_or_404(user_id, description="User not found")

            if not self.is_authorized(user, current_user_id, current_user_roles):
                abort(403, message="Unauthorized to delete this user")

            db.session.delete(user)
            db.session.commit()

            return {"message": "User deleted successfully"}, 200

        except OperationalError as e:
            db.session.rollback()
            return {"message": "Database error occurred"}, 500

    @jwt_required()
    @blp.response(200, UserSchema)
    def get(self, user_id):
        """Get a specific user"""
        try:
            user = UserModel.query.get_or_404(user_id)
            return user
        except OperationalError:
            abort(500, message="Database error occurred")

    def _can_access_user_data(self, business_admin_id, target_user_id):
        """Check if business admin can access user data based on appointments"""
        from models import AppointmentModel
        # Get admin's business ID
        admin = UserModel.query.get(business_admin_id)
        if not admin or not admin.business_id:
            return False
            
        # Check if user has any completed appointments with this business
        appointments = AppointmentModel.query.filter_by(
            user_id=target_user_id,
            business_id=admin.business_id
        ).all()
        
        return len(appointments) > 0

    def is_authorized(self, user, current_user_id, current_user_roles):
        """Authorization logic"""
        try:
            if str(user.id) == str(current_user_id):
                return True  # Allow user to modify self

            if "super_admin" in current_user_roles:
                return True

            if "business_admin" in current_user_roles:
                # Only allow access if user has appointments with the business
                return self._can_access_user_data(current_user_id, user.id)

            return False
        except OperationalError:
            return False



@blp.route("/users")
@blp.route("/users/me")
class UserView(MethodView):
    @jwt_required()
    def get(self):
        """Get current user or all users depending on route"""
        try:
            claims = get_jwt()
            user_id = claims.get("sub")
            roles = claims.get("roles", [])
            
            # Route differentiation
            from flask import request
            if request.path.endswith("/me"):
                # Return current user
                user = UserModel.query.get_or_404(user_id)
                return UserSchema().dump(user), 200

            # Check permissions for listing all users
            if "super_admin" in roles:
                users = UserModel.query.all()
                return UserSchema(many=True).dump(users), 200

            if "business_admin" in roles:
                admin = UserModel.query.get(user_id)
                if not admin or not admin.business_id:
                    abort(400, message="Business admin not properly configured")

                from models import AppointmentModel
                users_with_appointments = (
                    UserModel.query
                    .join(AppointmentModel)
                    .filter(AppointmentModel.business_id == admin.business_id)
                    .distinct()
                    .all()
                )
                return UserSchema(many=True).dump(users_with_appointments), 200

            abort(403, message="Unauthorized access")

        except OperationalError:
            abort(500, message="Database error occurred")
