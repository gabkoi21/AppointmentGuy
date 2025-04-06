# BookMeLib Backend

A Flask-based RESTful API for the BookMeLib application, offering JWT-based authentication, role-based access control, business and appointment management, and more.

## Features
- **Authentication:** Register and login with JWT.
- **Access Control:** Role-based protection for endpoints.
- **CRUD Operations:** For businesses, services, appointments, categories, and roles.
- **Database Migrations:** Managed with Alembic and Flask-Migrate.
- **Docker & CORS:** Container support and cross-origin resource sharing.

## Setup
1. **Clone & Setup Environment:**
   ```sh
   git clone <repository-url>
   cd BookMELib-backend
   python -m venv venv
   venv\Scripts\activate  # Windows
   ```
2. **Install Dependencies:**
   ```sh
   pip install -r requirements.txt
   ```

3. **Configure:**
   - Update `.env` and `.flaskenv`.
   - Default SQLite is used; modify `config.py` for other databases.

## Running the App
- **Locally:**  
  ```sh
  flask run
  ```
- **With Docker:**  
  ```sh
  docker build -t bookmelib-backend .
  docker run -p 5000:5000 bookmelib-backend
  ```

## Database Migrations
```sh
flask db init   # if not already initialized
flask db migrate
flask db upgrade
```

## Structure
- **app.py:** App entry point.
- **config.py, db.py:** Config and DB setup.
- **blocklist.py, seed.py:** JWT revocation and data seeding.
- **models/**, **resources/**, **utils/**: Models, API endpoints, and utility modules.
- **migrations/**: Database migration scripts.
- **Dockerfile:** Container configuration.

## Endpoints
- **/auth:** `/register`, `/login`
- **/auth/<user_id>:** User profile management (GET, PUT, DELETE)
- **/business, /services, /appointment, /category, /roles:** CRUD operations

## Security
Uses [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/en/stable/) for secure token-based authentication with a JWT blocklist for revocation.

## Contributing
Contributions are welcome via pull requests. Please include tests for new features or fixes.

## License
MIT License.