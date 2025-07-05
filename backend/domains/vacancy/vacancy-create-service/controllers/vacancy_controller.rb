require 'sinatra/base'
require_relative '../services/vacancy_service'

class VacancyController < Sinatra::Base
  service = VacancyService.new

  # Configuración CORS
  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
  end

  options '*' do
    200
  end

  post '/api/vacancies' do
    payload = JSON.parse(request.body.read)
    result = service.create_vacancy(payload)
    status result[:status]
    result[:body].to_json
  end
end

