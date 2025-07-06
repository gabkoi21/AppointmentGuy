from flask import request
from flask import Flask, request, jsonify
from flask_smorest import abort, Blueprint
from flask_jwt_extended import get_jwt, get_jwt_identity , jwt_required
from models import AppointmentModel , ServiceModel, UserModel , BusinessModel
from schemas import AppointmentSchema, AppointmentUpdateSchema
from db import db
from flask.views import MethodView
from utils.decorators import role_required
from datetime import datetime, timedelta

blp = Blueprint("Appointment", __name__, url_prefix="/appointment", description="Operations on Appointments")


@blp.route("/getall")
class AppointmentList(MethodView):
    @blp.response(200, AppointmentSchema(many=True))
    @jwt_required()
    def get(self):
        """Get all appointments based on the user role."""
        claims = get_jwt()
        user_type = claims.get("user_type")
        business_id = claims.get("business_id")
        user_id = get_jwt_identity()  # get the user ID from the token

        if user_type == "super_admin":
            # Super Admin sees all appointments
            appointments = AppointmentModel.query.all()


        elif user_type == "business_admin" and business_id:
            # Business Admin sees appointments of their business
            appointments = AppointmentModel.query.filter_by(business_id=business_id).all()

        elif user_type == "customer":
            # Customer sees only their own appointments
            appointments = AppointmentModel.query.filter_by(user_id=user_id).all()

        else:
            # Other users not allowed
            abort(403, message="You are not authorized to view appointments.")
        
        return appointments



@blp.route("/create")
class AppointmentCreate(MethodView):
    @blp.arguments(AppointmentSchema)
    @blp.response(201, AppointmentSchema)
    @role_required("customer")
    @jwt_required()
    def post(self, appointment_data):
        service = ServiceModel.query.get_or_404(appointment_data['service_id'])
        scheduled_time = appointment_data['scheduled_time']

        user_id = get_jwt_identity()
        user = UserModel.query.get_or_404(user_id)
        business = BusinessModel.query.get_or_404(appointment_data["business_id"])

        if user.status != "active":
            abort(403, message="Inactive users cannot book appointments.")

        if business.status != "active":
            abort(403, message="This business is currently not accepting appointments.")

        # Check for existing appointments at the same time
        existing_appointment = AppointmentModel.query.filter_by(
            business_id=appointment_data['business_id'],
            scheduled_time=scheduled_time
        ).first()

        if existing_appointment:
            abort(400, message="This time slot is already booked. Please choose another time.")

        appointment_data["user_id"] = user_id
        appointment_data["status"] = "pending"  # Set initial status

        appointment = AppointmentModel(**appointment_data)
        db.session.add(appointment)
        db.session.commit()
        return appointment


@blp.route("/<int:appointment_id>")
class Appointment(MethodView):
    @blp.response(200, AppointmentSchema)
    @role_required("business_admin", "customer", check_owner=True)
    def get(self, appointment_id):
        """Get a specific appointment by ID."""
        appointment = AppointmentModel.query.get_or_404(appointment_id)
        return appointment

    @blp.arguments(AppointmentUpdateSchema)
    @blp.response(200, AppointmentSchema)
    @jwt_required()
    @role_required("business_admin", "customer", check_owner=True)
    def put(self, appointment_data, appointment_id):
        appointment = AppointmentModel.query.get_or_404(appointment_id)

    

        for key, value in appointment_data.items():
            if key != "user_id": 
                setattr(appointment, key, value)

        db.session.commit()
        return appointment

    @blp.response(204)
    @role_required("business_admin", "customer",  check_owner=True)
    def delete(self, appointment_id):
        """Delete a specific appointment by ID."""
        appointment = AppointmentModel.query.get_or_404(appointment_id)

        db.session.delete(appointment)
        db.session.commit()
        return {"message": "Appointment deleted successfully."}, 204