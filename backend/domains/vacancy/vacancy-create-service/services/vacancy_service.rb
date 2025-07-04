require_relative '../models/vacancy'

class VacancyService
  def create_vacancy(data)
    # Aquí podrías agregar validaciones extra si necesitas
    vacancy = Vacancy.new
    vacancy.insert(data)
    { message: 'Vacante creada exitosamente' }
  end
end