require 'sinatra' 
require 'json'
require_relative './config/database'
require_relative './controllers/vacancy_controller'

# Montar controller
VacancyController.new

# Config
set :port, ENV['PORT'] || 5005
set :bind, '0.0.0.0'