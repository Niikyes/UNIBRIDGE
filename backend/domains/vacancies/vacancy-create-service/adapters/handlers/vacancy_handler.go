package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

// VacancyInput representa el JSON que se espera del frontend
type VacancyInput struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	StartDate   string   `json:"start_date"`
	EndDate     string   `json:"end_date"`
	Careers     []string `json:"careers"`
	CompanyID   string   `json:"company_id"`
}

// RegisterVacancyRoutes registra las rutas del microservicio
func RegisterVacancyRoutes(router *gin.Engine, driver neo4j.DriverWithContext) {
	router.POST("/vacancy", func(c *gin.Context) {
		var input VacancyInput

		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
			return
		}

		ctx := c.Request.Context()
		session := driver.NewSession(ctx, neo4j.SessionConfig{AccessMode: neo4j.AccessModeWrite})
		defer session.Close(ctx)

		// Generar ID único para la vacante
		id := uuid.New().String()

		_, err := session.ExecuteWrite(ctx, func(tx neo4j.ManagedTransaction) (any, error) {
			query := `
				CREATE (v:Vacancy {
					id: $id,
					title: $title,
					description: $description,
					start_date: $start_date,
					end_date: $end_date,
					careers: $careers,
					company_id: $company_id,
					status: "activa"
				})
			`
			params := map[string]any{
				"id":          id,
				"title":       input.Title,
				"description": input.Description,
				"start_date":  input.StartDate,
				"end_date":    input.EndDate,
				"careers":     input.Careers,
				"company_id":  input.CompanyID,
			}
			return tx.Run(ctx, query, params)
		})

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al crear la vacante"})
			return
		}

		c.JSON(http.StatusCreated, gin.H{"id": id, "message": "Vacante creada exitosamente"})
	})
}


