require 'sinatra'
require_relative './config/database'
require_relative './controllers/vacancy_controller'

use VacancyController

# Configurar puerto y host
set :port, 5005
set :bind, '0.0.0.0'

