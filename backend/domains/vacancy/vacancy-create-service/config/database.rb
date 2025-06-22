require 'pg'
require 'dotenv/load'

# Establish PostgreSQL connection using environment variables
def db_connection
  PG.connect(
    host: ENV['DB_HOST'],
    dbname: ENV['DB_NAME'],
    user: ENV['DB_USER'],
    password: ENV['DB_PASSWORD']
  )
end
