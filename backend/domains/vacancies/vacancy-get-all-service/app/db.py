from motor.motor_asyncio import AsyncIOMotorClient

# MongoDB connection string (local)
MONGO_URL = "mongodb://localhost:27017"
DATABASE_NAME = "unibridge"

# Function to return the DB connection
def get_database():
    client = AsyncIOMotorClient(MONGO_URL)
    return client[DATABASE_NAME]

