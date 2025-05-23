from flask.views import MethodView
from flask_smorest import Blueprint, abort
from passlib.hash import pbkdf2_sha256
from flask_jwt_extended import jwt_required, get_jwt
from db import db
from models import UserModel
from sqlalchemy.exc import OperationalError
from schemas import UserSchema, UserupdateSchema
from utils.decorators import role_required

blp = Blueprint("User", __name__, url_prefix="/auth", description="Operations on User Model models")


@blp.route("/<int:user_id>")
class ManageUser(MethodView):

    @jwt_required()
    @blp.arguments(UserupdateSchema(partial=True))
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
                setattr(user, key, hashed_password)
            else:
                setattr(user, key, value)

        db.session.commit()
        return {"message": "User updated successfully"}, 200

    @jwt_required()
    def delete(self, user_id):
        """Delete a specific user (customer, business_admin, etc.)"""
        try:
            claims = get_jwt()
            current_user_roles = claims.get("roles", [])
            current_user_id = claims.get("sub")

            if not current_user_id:
                return {"message": "Invalid user ID from token"}, 400

            user = UserModel.query.get_or_404(user_id, description="User not found")

            if not self.is_authorized(user, current_user_id, current_user_roles):
                abort(403, message="Unauthorized to delete this user")

            print(f"Deleting user: {user.id} by {current_user_id}")
            db.session.delete(user)
            db.session.commit()

            return {"message": "User deleted successfully"}, 200

        except OperationalError as e:
            print("OperationalError:", str(e))
            db.session.rollback()
            return {"message": "Database error occurred"}, 500

    @blp.response(200, UserSchema)
    def get(self, user_id):
        """Get a specific user (customer, business_admin)"""
        try:
            user = UserModel.query.get_or_404(user_id)
            return user
        except OperationalError:
            return {"message": "Cannot find user with this ID in the database"}, 500

    def is_authorized(self, user, current_user_id, current_user_roles):
        """Checks if the current user has permission to update/delete the specified user"""
        try:
            # Allow customers to update/delete their own account
            if str(user.id) == current_user_id and user.user_type == "customer":
                return True

            # Super admins can update/delete any user
            if "super_admin" in current_user_roles:
                return True

            # Business admins can update/delete customers in their business
            if "business_admin" in current_user_roles:
                current_user = UserModel.query.get(current_user_id)
                if current_user and current_user.business_id == user.business_id and user.user_type == "customer":
                    return True

            # Otherwise, not authorized
            return False

        except OperationalError:
            return False


@blp.route("/getuser")
class GetUser(MethodView):
    @jwt_required()
    @blp.arguments(UserupdateSchema)
    def get(self, user):
        """Get user (incomplete, needs fixing or further logic)"""
        return UserModel.query.get_or_404()  # ⚠️ You likely need to add a user_id argument here


@blp.route("/users")
class UserList(MethodView):
    @jwt_required()
    @blp.response(200, UserSchema(many=True))
    @role_required("super_admin", "business_admin")
    def get(self):
        """Get all users based on role authorization"""
        try:
            claims = get_jwt()
            current_user_roles = claims.get("roles", [])

            if "super_admin" in current_user_roles:
                users = UserModel.query.all()
            elif "business_admin" in current_user_roles:
                business_id = claims.get("business_id")
                users = UserModel.query.filter_by(business_id=business_id).all()
            else:
                abort(403, message="Unauthorized to view users")

            return users

        except OperationalError:
            abort(500, message="Database error occurred")
