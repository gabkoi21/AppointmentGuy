from flask import Flask, jsonify
from flask_smorest import Api
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from db import db
from dotenv import load_dotenv
import os
from pathlib import Path

from blocklist import BLOCKLIST
from resources.business import blp as BusinessBlueprint
from resources.auth import blp as AuthBlueprint
from resources.role import blp as RoleBlueprint
from resources.user import blp as UserBlueprint
from resources.service import blp as ServiceBlueprint
from resources.category import blp as CategoryBlueprint  
from resources.appointment import blp as AppointmentBlueprint


from sqlalchemy import event
from sqlalchemy.engine import Engine
import sqlite3

@event.listens_for(Engine, "connect")
def set_sqlite_pragma(dbapi_connection, connection_record):
    if isinstance(dbapi_connection, sqlite3.Connection):  # play nice with other DBs
        cursor = dbapi_connection.cursor()
        cursor.execute("PRAGMA foreign_keys=ON")
        cursor.close()


def create_app(db_url=None):
    # Get the directory where app.py is located
    basedir = Path(__file__).parent
    env_path = basedir / ".env.dev"
    
    # Load environment variables
    load_dotenv(env_path)
    
    # Debug - print what's being loaded
    print(f"Loading .env.dev from: {env_path}")
    print(f"File exists: {env_path.exists()}")
    # print(f"DATABASE_URL: {os.environ.get('DATABASE_URL')}")
    
    app = Flask(__name__)
    
    app.config["PROPAGATE_EXCEPTIONS"] = True
    app.config["API_TITLE"] = "BookMeLib REST API"
    app.config["API_VERSION"] = "v1"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
    
    # Set database URI after loading environment variables
    database_url = os.environ.get("DATABASE_URL")
    if not database_url:
        raise RuntimeError("DATABASE_URL environment variable is not set. Please check your .env.dev file.")
    
    app.config["SQLALCHEMY_DATABASE_URI"] = database_url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = "your-secure-random-key-here"

    # Initialize database
    db.init_app(app)

    # Initialize Flask-Migrate
    Migrate(app, db)

    # Enable Flask-Smorest
    api = Api(app)

    # Enable CORS with proper headers for Authorization and frontend access
    CORS(app)

    # Setup JWT
    jwt = JWTManager(app)

    @jwt.token_in_blocklist_loader
    def check_if_token_in_blocklist(jwt_header, jwt_payload):
        return jwt_payload["jti"] in BLOCKLIST

    @jwt.revoked_token_loader
    def revoked_token_callback(jwt_header, jwt_payload):
        return jsonify(
            {"description": "The token has been revoked.", "error": "token_revoked"}
        ), 401

    @jwt.needs_fresh_token_loader
    def token_not_fresh_callback(jwt_header, jwt_payload):
        return jsonify(
            {"description": "The token is not fresh.", "error": "fresh_token_required"}
        ), 401

    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_payload):
        return jsonify(
            {"description": "The token has expired.", "error": "token_expired"}
        ), 401

    @jwt.unauthorized_loader
    def unauthorized_callback(error):
        return jsonify(
            {"description": "Missing or invalid token.", "error": "authorization_required"}
        ), 401

    @jwt.invalid_token_loader
    def invalid_token_callback(error):
        return jsonify(
            {"description": "Signature verification failed.", "error": "invalid_token"}
        ), 401

    # Ensure all required roles exist
    with app.app_context():
        db.create_all()
        from models.role import RoleModel

        required_roles = ["super_admin", "business_admin", "customer"]
        for role_name in required_roles:
            if not RoleModel.query.filter_by(role=role_name).first():
                role = RoleModel(role=role_name)
                db.session.add(role)
                db.session.commit()
                print(f"{role_name.replace('_', ' ').title()} role created.")
            else:
                print(f"{role_name.replace('_', ' ').title()} role already exists.")

    # Register all API blueprints
    api.register_blueprint(RoleBlueprint)
    api.register_blueprint(AuthBlueprint)
    api.register_blueprint(UserBlueprint)
    api.register_blueprint(BusinessBlueprint)
    api.register_blueprint(ServiceBlueprint)
    api.register_blueprint(CategoryBlueprint)
    api.register_blueprint(AppointmentBlueprint)

    return app