from marshmallow import Schema, fields, validates, ValidationError, validate

# ==============================
# Role Schema
# ==============================
class RoleSchema(Schema):
    class Meta:
        schema_name = "Role"

    id = fields.Int(dump_only=True)
    role = fields.Str(required=True)
    timestamp = fields.DateTime(dump_only=True)

# ==============================
# Business Hours Schema
# ==============================
class BusinessHoursSchema(Schema):
    class Meta:
        schema_name = "BusinessHours"

    id = fields.Int(dump_only=True)
    business_id = fields.Int(required=True)
    day_of_week = fields.Int(required=True)
    opening_time = fields.Time(required=True)
    closing_time = fields.Time(required=True)
    is_closed = fields.Boolean(default=False)
    timestamp = fields.DateTime(dump_only=True)

    @validates('day_of_week')
    def validate_day_of_week(self, value):
        if not 0 <= value <= 6:
            raise ValidationError('Day of week must be between 0 (Monday) and 6 (Sunday)')

# ==============================
# User Schema
# ==============================
class UserSchema(Schema):
    class Meta:
        schema_name = "User"

    id = fields.Int(dump_only=True)
    first_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    email = fields.Email(required=True)
    password = fields.Str(load_only=True, required=True)
    business_id = fields.Integer(required=False, allow_none=True)
    user_type = fields.Str(required=False, default="customer")
    phone_number = fields.Str(required=True)
    address = fields.Str(required=False)
    timestamp = fields.DateTime(dump_only=True)
    roles = fields.List(fields.Nested(RoleSchema), dump_only=True)
    status = fields.Str(required=True, default="active")
    business = fields.Nested("BusinessSchema", only=("name",), dump_only=True)

# ==============================
# User Update Schema
# ==============================
class UserUpdateSchema(Schema):
    class Meta:
        schema_name = "UserUpdate"

    first_name = fields.Str(required=False)
    last_name = fields.Str(required=False)
    email = fields.Email(required=False)
    password = fields.Str(load_only=True, required=False)
    business_id = fields.Integer(required=False, allow_none=True)
    address = fields.Str(required=False)
    timestamp = fields.DateTime(dump_only=True)
    user_type = fields.Str(required=False)
    phone_number = fields.Str(required=False)

# ==============================
# User Login Schema
# ==============================
class UserLoginSchema(Schema):
    class Meta:
        schema_name = "UserLogin"

    email = fields.Email(required=True)
    password = fields.Str(load_only=True, required=True)

# ==============================
# Service Schema
# ==============================
class ServiceSchema(Schema):
    class Meta:
        schema_name = "Service"

    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    description = fields.Str(required=False)
    price = fields.Float(required=True)
    business_id = fields.Int(required=True)
    category_id = fields.Int(required=True)
    timestamp = fields.DateTime(dump_only=True)

# ==============================
# Service Update Schema
# ==============================
class ServiceUpdateSchema(Schema):
    class Meta:
        schema_name = "ServiceUpdate"

    name = fields.Str(required=False)
    description = fields.Str(required=False)
    price = fields.Float(required=False)
    business_id = fields.Int(required=False)
    category_id = fields.Int(required=False)
    is_active = fields.Bool(required=False)

# ==============================
# Business Schema
# ==============================
class BusinessSchema(Schema):
    class Meta:
        schema_name = "Business"

    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    description = fields.Str(required=True)
    timestamp = fields.DateTime(dump_only=True)
    users = fields.List(fields.Nested(UserSchema), dump_only=True)
    admin_user = fields.Nested(UserSchema, required=True)
    address = fields.Str(required=False)
    phone_number = fields.Str(required=False)
    email = fields.Email(required=False)
    status = fields.Str(required=True)
    about = fields.Str(required=False)
    business_hours = fields.List(fields.Nested(BusinessHoursSchema), dump_only=True)
    services = fields.List(fields.Nested(ServiceSchema), dump_only=True)

# ==============================
# Business Update Schema
# ==============================
class BusinessUpdateSchema(Schema):
    class Meta:
        schema_name = "BusinessUpdate"

    name = fields.Str(required=False)
    description = fields.Str(required=False)
    timestamp = fields.DateTime(dump_only=True)
    address = fields.Str(required=False)
    phone_number = fields.Str(required=False)
    email = fields.Email(required=False)
    about = fields.Str(required=False)
    status = fields.Str(required=False)

# ==============================
# Appointment Schema
# ==============================
class AppointmentSchema(Schema):
    class Meta:
        schema_name = "Appointment"

    id = fields.Int(dump_only=True)
    user_id = fields.Int(required=True)
    business_id = fields.Int(required=True)
    service_id = fields.Int(required=True)
    scheduled_time = fields.DateTime(required=True)
    timestamp = fields.DateTime(dump_only=True)
    user = fields.Nested(UserSchema, dump_only=True)
    business = fields.Nested(BusinessSchema, dump_only=True)
    service = fields.Nested(ServiceSchema, dump_only=True)
    status = fields.Str(required=True)

# ==============================
# Appointment Update Schema
# ==============================
class AppointmentUpdateSchema(Schema):
    class Meta:
        schema_name = "AppointmentUpdate"

    user_id = fields.Int(required=False)
    business_id = fields.Int(required=False)
    service_id = fields.Int(required=False)
    scheduled_time = fields.DateTime(required=False)
    status = fields.Str(required=False)
    timestamp = fields.DateTime(dump_only=True)

# ==============================
# Category Schema
# ==============================
class CategorySchema(Schema):
    class Meta:
        schema_name = "Category"

    id = fields.Int(dump_only=True)
    category_name = fields.Str(required=False)
    timestamp = fields.DateTime(dump_only=True)
    services = fields.List(fields.Nested(ServiceSchema), dump_only=True)



class AppointmentStatusSchema(Schema):
    status = fields.Str(
        required=True,
        validate=validate.OneOf(["pending", "confirmed", "completed", "cancelled"])
    )
