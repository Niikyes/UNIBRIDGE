import psycopg2
from psycopg2.extras import RealDictCursor
from app import config

# Establish connection to PostgreSQL using psycopg2
def get_connection():
    try:
        conn = psycopg2.connect(
            host=config.DB_HOST,
            port=config.DB_PORT,
            database=config.DB_NAME,
            user=config.DB_USER,
            password=config.DB_PASSWORD,
            cursor_factory=RealDictCursor  # returns dicts instead of tuples
        )
        return conn
    except Exception as e:
        print("Database connection failed:", e)
        raise
