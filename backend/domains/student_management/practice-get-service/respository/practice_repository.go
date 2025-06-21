package repository

import (
	"context"
	"fmt"

	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-get-service/config"
	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-get-service/models"
)

// GetPracticesByStudentID retrieves all practices for a given student, with optional status filter
func GetPracticesByStudentID(studentID string, statusFilter string) ([]models.Practice, error) {
	var practices []models.Practice

	// Base query
	query := `
		SELECT id, vacante_id, fecha_inicio, fecha_fin, tutor_academico_id,
		       tutor_empresarial_id, estado
		FROM practicas
		WHERE estudiante_id = $1
	`

	// Add optional status filter
	args := []any{studentID}
	if statusFilter != "" {
		query += " AND estado = $2"
		args = append(args, statusFilter)
	}

	// Execute query
	rows, err := config.DB.Query(context.Background(), query, args...)
	if err != nil {
		return nil, fmt.Errorf("error querying practices: %v", err)
	}
	defer rows.Close()

	// Scan rows into the slice
	for rows.Next() {
		var p models.Practice
		err := rows.Scan(
			&p.ID,
			&p.VacanteID,
			&p.FechaInicio,
			&p.FechaFin,
			&p.TutorAcademicoID,
			&p.TutorEmpresarialID,
			&p.Estado,
		)
		if err != nil {
			return nil, fmt.Errorf("error scanning row: %v", err)
		}
		practices = append(practices, p)
	}

	return practices, nil
}
