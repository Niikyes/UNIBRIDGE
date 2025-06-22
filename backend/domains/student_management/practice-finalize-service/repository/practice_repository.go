package repository

import (
	"context"
	"fmt"

	"practice-finalize-service/config"
	"practice-finalize-service/models"
)

// FinalizePractice sets the practice as finalized and updates the end date
func FinalizePractice(p models.Practice) error {
	query := `
		UPDATE practicas
		SET fecha_fin = $1,
		    estado = $2
		WHERE id = $3
	`

	// Execute the update
	_, err := config.DB.Exec(
		context.Background(),
		query,
		p.FechaFin,
		p.Estado,
		p.ID,
	)

	if err != nil {
		fmt.Println("FINALIZE ERROR:", err)
		return fmt.Errorf("failed to finalize practice: %v", err)
	}

	return nil
}
