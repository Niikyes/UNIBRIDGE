require 'sinatra'
require 'sinatra/json'
require 'pg'
require 'dotenv/load'
require 'securerandom'
require 'net/http'
require 'uri'
require 'json'

# DB connection
def db_connection
  PG.connect(
    host: ENV['DB_HOST'],
    dbname: ENV['DB_NAME'],
    user: ENV['DB_USER'],
    password: ENV['DB_PASSWORD'],
    port: ENV['DB_PORT']
  )
end

# Validación de UUID
def valid_uuid?(uuid)
  uuid.match?(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
end

# Ruta para crear una vacante
# ...existing code...

post '/api/vacancies' do
  vacante = JSON.parse(request.body.read)

  # Validar campos requeridos
  required_fields = %w[titulo descripcion modalidad ubicacion fecha_inicio fecha_fin carreras_destino habilidades empresa_id]
  missing = required_fields.select { |f| vacante[f].nil? || vacante[f].to_s.strip.empty? }
  unless missing.empty?
    halt 400, json(error: "Faltan campos requeridos: #{missing.join(', ')}")
  end

  # Validar formato de UUID
  unless valid_uuid?(vacante['empresa_id'])
    halt 400, json(error: "Formato de empresa_id inválido")
  end

  conn = db_connection

  begin
    puts "Validando empresa con ID: #{vacante['empresa_id']}"
    uri = URI("http://localhost:3011/api/empresas/#{vacante['empresa_id']}")

    response = Net::HTTP.get_response(uri)
    puts "Respuesta desde get-service: #{response.code}"

    if response.code != '200'
      halt 404, json(error: "Empresa no encontrada o no aprobada")
    end

    puts "Insertando vacante..."
    conn.exec_params(
      "INSERT INTO vacantes (titulo, descripcion, modalidad, ubicacion, fecha_inicio, fecha_fin, carreras_destino, habilidades, empresa_id, estado)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
      [
        vacante['titulo'],
        vacante['descripcion'],
        vacante['modalidad'],
        vacante['ubicacion'],
        vacante['fecha_inicio'],
        vacante['fecha_fin'],
        vacante['carreras_destino'],
        vacante['habilidades'],
        vacante['empresa_id'],
        'publicada'
      ]
    )

    status 201
    json(message: 'Vacante creada correctamente')

  rescue PG::Error => e
    puts "Error de base de datos: #{e.message}"
    status 500
    json(error: 'Error al insertar la vacante en la base de datos')

  rescue => e
    puts "Error general: #{e.message}"
    status 500
    json(error: 'Error interno del servidor')
  ensure
    conn.close if conn
  end
end
