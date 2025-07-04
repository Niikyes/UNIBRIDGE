require_relative '../config/database'

class Vacancy
  def insert(data)
    conn = DatabaseConnection.connection

    carreras_destino_pg = data['carreras_destino'].join(',')
    habilidades_pg = data['habilidades'].join(',')

    conn.exec_params(
      "INSERT INTO vacantes 
        (titulo, descripcion, modalidad, ubicacion, fecha_inicio, fecha_fin, carreras_destino, habilidades, empresa_id, estado)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
      [
        data['titulo'],
        data['descripcion'],
        data['modalidad'],
        data['ubicacion'],
        data['fecha_inicio'],
        data['fecha_fin'],
        carreras_destino_pg,
        habilidades_pg,
        data['empresa_id'],
        'publicada'
      ]
    )
  end
end

