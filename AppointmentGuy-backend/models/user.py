from db import db
from datetime import datetime
from models.associations import user_roles

class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    phone_number = db.Column(db.String(20))
    address = db.Column(db.String(255))
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id', ondelete="CASCADE"), nullable=True)
    user_type = db.Column(db.String(20), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.now)
    status = db.Column(db.String(20), default="active")

    # Relationships
    business = db.relationship(
        'BusinessModel',
        back_populates='users',
        foreign_keys=[business_id],
        passive_deletes=True
    )

    owned_businesses = db.relationship(
        'BusinessModel',
        foreign_keys='BusinessModel.owner_id',
        back_populates='owner',
        passive_deletes=True
    )

    appointments = db.relationship(
        'AppointmentModel',
        back_populates='user',
        cascade="all, delete-orphan",
        passive_deletes=True
    )

    roles = db.relationship('RoleModel', secondary=user_roles, back_populates='users')
