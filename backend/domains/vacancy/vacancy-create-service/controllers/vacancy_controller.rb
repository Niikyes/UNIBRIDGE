require 'sinatra'
require_relative '../services/vacancy_service'

class VacancyController
  def initialize
    service = VacancyService.new

    post '/api/vacancies' do
      payload = JSON.parse(request.body.read)
      result = service.create_vacancy(payload)
      status result[:status]
      result[:body].to_json
    end
  end
end
