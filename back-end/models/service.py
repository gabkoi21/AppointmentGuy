from db import db
from datetime import datetime

class ServiceModel(db.Model):
    __tablename__ = 'services'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float, nullable=False)
    # business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id', ondelete="CASCADE"), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    # duration = db.Column(db.Integer, nullable=False)  # Duration in minutes
    timestamp = db.Column(db.DateTime, default=datetime.now)

    # Relationships
    business = db.relationship('BusinessModel', back_populates='services')
    category = db.relationship('CategoryModel', back_populates='services')
    appointments = db.relationship('AppointmentModel', back_populates='service')