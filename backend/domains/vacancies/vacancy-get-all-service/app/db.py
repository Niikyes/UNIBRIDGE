from motor.motor_asyncio import AsyncIOMotorClient

# MongoDB connection URI (adjust if needed)
MONGO_URI = "mongodb://localhost:27017"

# Connect to the MongoDB client
client = AsyncIOMotorClient(MONGO_URI)

# Access the database
db = client["unibridge_vacancies"]

# Return the collection to be used in queries
def get_vacancy_collection():
    return db["vacancies"]
