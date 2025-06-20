package services

import (
	"vacancy-create-service/core/entities"
	"vacancy-create-service/core/ports"
)

type VacancyService struct {
	Repository ports.VacancyRepository
}

func NewVacancyService(repo ports.VacancyRepository) *VacancyService {
	return &VacancyService{Repository: repo}
}

func (s *VacancyService) CreateVacancy(vacancy *entities.Vacancy) error {
	vacancy.Status = "activa"
	return s.Repository.CreateVacancy(vacancy)
}
