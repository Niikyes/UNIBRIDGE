require_relative '../config/database'
require 'net/http'
require 'uri'
require 'json'

class Vacancy
  def insert(vacante)
    conn = db_connection

    # Validar empresa en microservicio get-service
    uri = URI("http://localhost:3011/api/empresas/#{vacante['empresa_id']}")
    response = Net::HTTP.get_response(uri)

    if response.code != '200'
      raise "Empresa no encontrada o no aprobada"
    end

    carreras_destino_pg = "{#{vacante['carreras_destino'].join(',')}}"
    habilidades_pg = "{#{vacante['habilidades'].join(',')}}"

    conn.exec_params(
      "INSERT INTO vacantes 
        (titulo, descripcion, modalidad, ubicacion, fecha_inicio, fecha_fin, carreras_destino, habilidades, empresa_id, estado)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
      [
        vacante['titulo'],
        vacante['descripcion'],
        vacante['modalidad'],
        vacante['ubicacion'],
        vacante['fecha_inicio'],
        vacante['fecha_fin'],
        carreras_destino_pg,
        habilidades_pg,
        vacante['empresa_id'],
        'publicada'
      ]
    )
  ensure
    conn.close if conn
  end
end
