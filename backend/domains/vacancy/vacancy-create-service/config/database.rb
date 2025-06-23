require 'pg'
require 'dotenv/load'

# Establecer conexión a PostgreSQL usando variables de entorno
def db_connection
  PG.connect(
    host: ENV['DB_HOST'],
    dbname: ENV['DB_NAME'],
    user: ENV['DB_USER'],
    password: ENV['DB_PASSWORD'],
    port: ENV['DB_PORT']
  )
end
