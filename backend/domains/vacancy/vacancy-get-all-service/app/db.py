import psycopg
from psycopg.rows import dict_row

def get_db_connection():
    conn = psycopg.connect(
        dbname="user_db",
        user="postgres",
        password="12345",
        host="localhost",
        port="5432",
        row_factory=dict_row  
    )
    conn.execute("SET client_encoding TO 'UTF8'")
    return conn




