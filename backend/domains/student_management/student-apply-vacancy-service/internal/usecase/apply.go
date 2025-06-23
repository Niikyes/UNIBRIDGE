package usecase

import (
    "database/sql"
    "student-apply-vacancy-service/internal/command"
    "student-apply-vacancy-service/internal/domain"
    "student-apply-vacancy-service/internal/repository"
)

func ApplyToVacancy(db *sql.DB, cmd command.ApplyPostulacionCommand) error {
    postulacion := domain.Postulacion{
        EstudianteID: cmd.EstudianteID,
        VacanteID:    cmd.VacanteID,
        Estado:       "pendiente",
    }

    return repository.SavePostulacion(db, postulacion)
}
