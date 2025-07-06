require 'sinatra'
require_relative './config/database'
require_relative './controllers/vacancy_controller'

# Montar controller
use VacancyController

# Config
set :port, 5005
set :bind, '0.0.0.0'

