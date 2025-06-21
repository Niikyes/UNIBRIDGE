package repository

import (
	"context"
	"fmt"

	"practice-update-service/config"
	"practice-update-service/models"
)

// UpdatePractice updates a practice record in the database by ID
func UpdatePractice(p models.Practice) error {
	query := `
		UPDATE practicas
		SET fecha_inicio = $1,
		    fecha_fin = $2,
		    tutor_academico_id = $3,
		    tutor_empresarial_id = $4,
		    estado = $5
		WHERE id = $6
	`

	// Execute update query
	_, err := config.DB.Exec(
		context.Background(),
		query,
		p.FechaInicio,
		p.FechaFin,
		p.TutorAcademicoID,
		p.TutorEmpresarialID,
		p.Estado,
		p.ID,
	)

	if err != nil {
		return fmt.Errorf("failed to update practice: %v", err)
	}

	return nil
}
