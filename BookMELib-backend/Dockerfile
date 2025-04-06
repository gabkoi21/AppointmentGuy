# Use Python 3.10 as the base image
FROM python:3.10

# Expose port 5000 to access the app
EXPOSE 5000

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file to the container
COPY requirements.txt requirements.txt

# Install the required Python packages from requirements.txt
RUN pip install -r requirements.txt

# Copy the rest of the application files into the container
COPY . .

# Run the Flask app, accessible from any host
CMD ["flask", "run", "--host", "0.0.0.0"]
