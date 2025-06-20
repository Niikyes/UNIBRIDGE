package ports

import "vacancy-create-service/core/entities"

type VacancyRepository interface {
	CreateVacancy(vacancy *entities.Vacancy) error
}
