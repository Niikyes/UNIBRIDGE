import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Service configuration
PORT = os.getenv("PORT", "5004")
VACANCY_SERVICE_URL = os.getenv("VACANCY_SERVICE_URL")
