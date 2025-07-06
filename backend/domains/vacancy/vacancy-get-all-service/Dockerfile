# Use official Python image
FROM python:3.11

# Set work directory
WORKDIR /app

# Copy requirements
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Expose port
EXPOSE 5100

# Run the service
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5007"]
