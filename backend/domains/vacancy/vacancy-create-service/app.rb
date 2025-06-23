# encoding: utf-8

require 'sinatra' 
require 'pg'
require 'json'
require 'net/http'
require 'uri'
require 'dotenv/load'

# Conexión a PostgreSQL
def db_connection
  PG.connect(ENV['DB_URL'])
end

# Validar si empresa_id existe en user_db (usando get-service)
def empresa_valida?(empresa_id)
  url = URI("http://localhost:3011/api/empresas/empresa/#{empresa_id}")
  res = Net::HTTP.get_response(url)
  res.is_a?(Net::HTTPSuccess)
end

# Validar si carrera_id existe localmente en unibridge_business
def carrera_valida?(carrera_id)
  conn = db_connection
  result = conn.exec_params('SELECT 1 FROM carreras WHERE id = $1 LIMIT 1', [carrera_id])
  conn.close
  result.ntuples > 0
end

# Endpoint para crear vacante
post '/api/vacancies' do
  content_type :json
  begin
    data = JSON.parse(request.body.read)

    required_fields = %w[titulo descripcion empresa_id ciudad carrera_id estado fecha_publicacion]
    missing_fields = required_fields.select { |f| data[f].nil? || data[f].strip.empty? }
    unless missing_fields.empty?
      status 400
      return { error: "Campos requeridos faltantes: #{missing_fields.join(', ')}" }.to_json
    end

    unless empresa_valida?(data['empresa_id'])
      status 404
      return { error: "Empresa no encontrada en user_db" }.to_json
    end

    unless carrera_valida?(data['carrera_id'])
      status 404
      return { error: "Carrera no encontrada en unibridge_business" }.to_json
    end

    conn = db_connection
    conn.exec_params(
      'INSERT INTO vacantes (titulo, descripcion, empresa_id, ciudad, carrera_id, estado, fecha_publicacion)
       VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [
        data['titulo'],
        data['descripcion'],
        data['empresa_id'],
        data['ciudad'],
        data['carrera_id'],
        data['estado'],
        data['fecha_publicacion']
      ]
    )
    conn.close

    status 201
    { message: 'Vacancy created successfully' }.to_json

  rescue JSON::ParserError
    status 400
    { error: 'Formato JSON inválido' }.to_json
  rescue PG::Error => e
    status 500
    { error: "Error de base de datos: #{e.message}" }.to_json
  rescue StandardError => e
    status 500
    { error: "Error inesperado: #{e.message}" }.to_json
  end
end
