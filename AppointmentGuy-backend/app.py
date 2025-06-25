from flask import Flask, jsonify
from flask_smorest import Api
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from db import db
from dotenv import load_dotenv
import os
from pathlib import Path
from datetime import timedelta
from sqlalchemy import event
from sqlalchemy.engine import Engine
import sqlite3

# Blueprints
from blocklist import BLOCKLIST
from resources.business import blp as BusinessBlueprint
from resources.auth import blp as AuthBlueprint
from resources.role import blp as RoleBlueprint
from resources.user import blp as UserBlueprint
from resources.service import blp as ServiceBlueprint
from resources.category import blp as CategoryBlueprint
from resources.appointment import blp as AppointmentBlueprint

# ✅ Enable foreign key support in SQLite
@event.listens_for(Engine, "connect")
def set_sqlite_pragma(dbapi_connection, connection_record):
    if isinstance(dbapi_connection, sqlite3.Connection):
        cursor = dbapi_connection.cursor()
        cursor.execute("PRAGMA foreign_keys=ON")
        cursor.close()

def create_app(db_url=None):
    basedir = Path(__file__).parent
    env_path = basedir / ".env.dev"
    load_dotenv(env_path)

    app = Flask(__name__)

    # ✅ Enable CORS
    CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

    # ✅ API Metadata
    app.config["API_TITLE"] = "BookMeLib REST API"
    app.config["API_VERSION"] = "v1"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"

    # ✅ JWT Settings (HEADER ONLY)
    app.config["JWT_SECRET_KEY"] = "your-secure-random-key-here"
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=15)
    app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=7)
    app.config["JWT_TOKEN_LOCATION"] = ["headers"]  # ✅ Only headers

    # ✅ Database
    database_url = os.environ.get("DATABASE_URL")
    if not database_url:
        raise RuntimeError("DATABASE_URL environment variable is not set.")
    app.config["SQLALCHEMY_DATABASE_URI"] = database_url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    # ✅ Init extensions
    db.init_app(app)
    Migrate(app, db)
    api = Api(app)
    jwt = JWTManager(app)

    # ✅ JWT Error Handlers
    @jwt.token_in_blocklist_loader
    def check_if_token_in_blocklist(jwt_header, jwt_payload):
        return jwt_payload["jti"] in BLOCKLIST

    @jwt.revoked_token_loader
    def revoked_token_callback(jwt_header, jwt_payload):
        return jsonify({"description": "The token has been revoked.", "error": "token_revoked"}), 401

    @jwt.needs_fresh_token_loader
    def token_not_fresh_callback(jwt_header, jwt_payload):
        return jsonify({"description": "The token is not fresh.", "error": "fresh_token_required"}), 401

    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_payload):
        return jsonify({"description": "The token has expired.", "error": "token_expired"}), 401

    @jwt.unauthorized_loader
    def unauthorized_callback(error):
        return jsonify({"description": "Missing or invalid token.", "error": "authorization_required"}), 401

    @jwt.invalid_token_loader
    def invalid_token_callback(error):
        return jsonify({"description": "Signature verification failed.", "error": "invalid_token"}), 401

    # ✅ Setup Roles
    with app.app_context():
        db.create_all()
        from models.role import RoleModel
        required_roles = ["super_admin", "business_admin", "customer"]
        for role_name in required_roles:
            if not RoleModel.query.filter_by(role=role_name).first():
                role = RoleModel(role=role_name)
                db.session.add(role)
                db.session.commit()

    # ✅ Register Blueprints
    api.register_blueprint(AuthBlueprint)
    api.register_blueprint(UserBlueprint)
    api.register_blueprint(RoleBlueprint)
    api.register_blueprint(BusinessBlueprint)
    api.register_blueprint(ServiceBlueprint)
    api.register_blueprint(CategoryBlueprint)
    api.register_blueprint(AppointmentBlueprint)

    # ✅ Health check route
    @app.route("/")
    def home():
        return jsonify({
            "message": "Welcome to the AppointmentGuy API 👋",
            "status": "running"
        }), 200

    return app
