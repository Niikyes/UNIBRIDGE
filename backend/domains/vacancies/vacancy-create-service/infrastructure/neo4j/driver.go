package neo4j

import (
	"context"
	"fmt"
	"vacancy-create-service/core/entities"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

type VacancyNeo4jRepository struct {
	Driver neo4j.DriverWithContext
}

func NewVacancyNeo4jRepository(driver neo4j.DriverWithContext) *VacancyNeo4jRepository {
	return &VacancyNeo4jRepository{Driver: driver}
}

func (r *VacancyNeo4jRepository) CreateVacancy(v *entities.Vacancy) error {
	ctx := context.Background()
	session := r.Driver.NewSession(ctx, neo4j.SessionConfig{AccessMode: neo4j.AccessModeWrite})
	defer session.Close(ctx)

	_, err := session.ExecuteWrite(ctx, func(tx neo4j.ManagedTransaction) (any, error) {
		query := `
			CREATE (v:Vacancy {
				id: $id,
				title: $title,
				description: $description,
				start_date: $start_date,
				end_date: $end_date,
				company_id: $company_id,
				status: $status,
				careers: $careers
			})
		`
		params := map[string]any{
			"id":          v.ID,
			"title":       v.Title,
			"description": v.Description,
			"start_date":  v.StartDate,
			"end_date":    v.EndDate,
			"company_id":  v.CompanyID,
			"status":      v.Status,
			"careers":     v.Careers,
		}
		return tx.Run(ctx, query, params)
	})

	return err
}
