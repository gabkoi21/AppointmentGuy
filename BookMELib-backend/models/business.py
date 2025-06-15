from db import db
from datetime import datetime
from models.user import UserModel


class BusinessModel(db.Model):
    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text)
    address = db.Column(db.String(255))
    email = db.Column(db.String(120))
    phone_number = db.Column(db.String(20))
    status = db.Column(db.String(20), default="active")
    about = db.Column(db.String(255), nullable=False, default="No information available")
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete="SET NULL"), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.now)

    # Relationships
    owner = db.relationship(
        'UserModel',
        foreign_keys=[owner_id],
        back_populates='owned_businesses',
        passive_deletes=True
    )

    users = db.relationship(
        'UserModel',
        foreign_keys='UserModel.business_id',
        back_populates='business',
        cascade="all, delete-orphan", 
        passive_deletes=True
    )

    services = db.relationship(
        'ServiceModel',
        back_populates='business',
        cascade="all, delete-orphan",
        passive_deletes=True
    )

    appointments = db.relationship(
        'AppointmentModel',
        back_populates='business',
        cascade="all, delete-orphan",
        passive_deletes=True
    )
