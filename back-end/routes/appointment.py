from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.appointment import AppointmentModel
from models.business import BusinessModel
from db import db

appointment_bp = Blueprint('appointment', __name__)

@appointment_bp.route('/appointment', methods=['POST'])
@jwt_required()
def create_appointment():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['business_id', 'service_id', 'date', 'time']
        for field in required_fields:
            if field not in data:
                return jsonify({'message': f'Missing required field: {field}'}), 400
        
        # Create new appointment
        new_appointment = AppointmentModel(
            business_id=data['business_id'],
            service_id=data['service_id'],
            user_id=get_jwt_identity(),
            date=data['date'],
            time=data['time'],
            status='pending'
        )
        
        db.session.add(new_appointment)
        db.session.commit()
        
        return jsonify({'message': 'Appointment created successfully', 'id': new_appointment.id}), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500
