package usecase

import (
    "database/sql"
    "fmt"
    "student-apply-vacancy-service/internal/command"
    "student-apply-vacancy-service/internal/domain"
    "student-apply-vacancy-service/internal/repository"
)

func ApplyToVacancy(db *sql.DB, cmd command.ApplyPostulacionCommand) error {
    // Check if the application already exists
    exists, err := repository.CheckExistingPostulacion(db, cmd.EstudianteID, cmd.VacanteID)
    if err != nil {
        return fmt.Errorf("Failed to check existing application: %v", err)
    }
    if exists {
        return fmt.Errorf("already_applied")
    }

    // Create new application
    postulacion := domain.Postulacion{
        EstudianteID: cmd.EstudianteID,
        VacanteID:    cmd.VacanteID,
        Estado:       "pendiente",
    }

    return repository.SavePostulacion(db, postulacion)
}
