require 'sinatra/base'
require_relative '../services/vacancy_service'

class VacancyController < Sinatra::Base
  def initialize(app = nil)
    super(app)
    @service = VacancyService.new
  end

  post '/vacancies' do
    payload = JSON.parse(request.body.read)
    result = @service.create_vacancy(payload)

    status 201
    result.to_json
  end
end
