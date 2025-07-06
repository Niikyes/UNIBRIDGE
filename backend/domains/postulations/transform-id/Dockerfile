FROM python:3.11.9-slim

# Environment configuration
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PORT=5006

WORKDIR /usr/src/app

# Install dependencies first (cache-friendly)
COPY ["requirements.txt", "./"]
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code
COPY . .

# Expose the container's internal port
EXPOSE 5006

# Create non-root user for security
RUN adduser --disabled-password appuser && chown -R appuser /usr/src/app
USER appuser

# Final command
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5006"]


