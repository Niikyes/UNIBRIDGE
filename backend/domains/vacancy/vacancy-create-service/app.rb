require 'sinatra'
require 'sinatra/json'
require 'pg'
require 'dotenv/load'
require_relative './config/database'

# Set JSON response content type
before do
  content_type :json
end

# POST /api/vacancies
post '/api/vacancies' do
  data = JSON.parse(request.body.read)

  required_fields = %w[titulo descripcion empresa_id ciudad carrera estado fecha_publicacion]
  missing = required_fields.select { |f| !data.key?(f) || data[f].to_s.strip.empty? }

  if !missing.empty?
    status 400
    return json({ error: "Missing required fields: #{missing.join(', ')}" })
  end

  begin
    conn = db_connection

    conn.exec_params(
      "INSERT INTO vacantes (titulo, descripcion, empresa_id, ciudad, carrera, estado, fecha_publicacion)
       VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        data['titulo'],
        data['descripcion'],
        data['empresa_id'],
        data['ciudad'],
        data['carrera'],
        data['estado'],
        data['fecha_publicacion']
      ]
    )

    status 201
    json({ message: "Vacancy created successfully" })
  rescue PG::Error => e
    status 500
    json({ error: "Database error: #{e.message}" })
  ensure
    conn&.close
  end
end
