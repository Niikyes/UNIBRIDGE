package repository

import (
	"context"
	"fmt"
	

	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-create-service/config"
	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-create-service/models"
)

func CreatePractice(p models.Practice) (int, error) {
	query := `
		INSERT INTO practicas (
			estudiante_id, vacante_id, fecha_inicio, fecha_fin,
			tutor_academico_id, tutor_empresarial_id
		) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;
	`

	var insertedID int
	err := config.DB.QueryRow(
		context.Background(),
		query,
		p.EstudianteID, p.VacanteID, p.FechaInicio, p.FechaFin,
		p.TutorAcademicoID, p.TutorEmpresarialID,
	).Scan(&insertedID)

	if err != nil {
		return 0, fmt.Errorf("error inserting practice: %v", err)
	}

	return insertedID, nil
}
