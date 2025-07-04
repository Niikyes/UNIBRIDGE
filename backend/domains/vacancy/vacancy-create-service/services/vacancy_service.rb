require_relative '../models/vacancy'

class VacancyService
  def create_vacancy(vacante)
    required_fields = %w[titulo descripcion modalidad ubicacion fecha_inicio fecha_fin carreras_destino habilidades empresa_id]
    missing = required_fields.select { |f| vacante[f].nil? || vacante[f].to_s.strip.empty? }
    unless missing.empty?
      return { status: 400, body: { error: "Faltan campos: #{missing.join(', ')}" } }
    end

    # Validación UUID
    unless vacante['empresa_id'].match?(/[0-9a-fA-F\-]{36}/)
      return { status: 400, body: { error: "Formato de empresa_id inválido" } }
    end

    model = Vacancy.new
    begin
      model.insert(vacante)
      { status: 201, body: { message: 'Vacante creada correctamente' } }
    rescue => e
      puts "Error DB: #{e.message}"
      { status: 500, body: { error: 'Error al insertar vacante' } }
    end
  end
end
