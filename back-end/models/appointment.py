from db import db
from datetime import datetime

class AppointmentModel(db.Model):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
    db.Integer,
    db.ForeignKey('users.id', ondelete="CASCADE", name='fk_appointments_user_id'),
    nullable=False
    )

    business_id = db.Column(
    db.Integer,
    db.ForeignKey('businesses.id', ondelete="CASCADE", name='fk_appointments_business_id'),
    nullable=False
    )

    service_id = db.Column(
    db.Integer,
    db.ForeignKey('services.id', ondelete="CASCADE", name='fk_appointments_service_id'),
    nullable=False
    )
    scheduled_time = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(20), default='pending')
    timestamp = db.Column(db.DateTime, default=datetime.now)

    # Relationships
    user = db.relationship('UserModel', back_populates='appointments', passive_deletes=True)
    business = db.relationship('BusinessModel', back_populates='appointments')
    service = db.relationship('ServiceModel', back_populates='appointments')
