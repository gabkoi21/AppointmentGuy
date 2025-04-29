@blp.route('/public')
class PublicBusinessList(MethodView):
    @blp.response(200, BusinessSchema(only=("id", "name"), many=True))
    def get(self):
        """Public: Get list of businesses (for signup form)."""
        businesses = BusinessModel.query.all()
        return businesses
