
package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j"

	"core/entities"
)

// RegisterVacancyRoutes registers the POST /vacancy route
func RegisterVacancyRoutes(router *gin.Engine, driver neo4j.DriverWithContext) {
	router.POST("/vacancy", func(c *gin.Context) {
		var vacancy entities.VacancyRequest

		// Try to parse JSON body
		if err := c.ShouldBindJSON(&vacancy); err != nil {
			c.JSON(400, gin.H{"error": "Invalid JSON"})
			return
		}

		// Generate a unique ID for the vacancy
		id := uuid.New().String()

		// Open a Neo4j session
		session := driver.NewSession(c, neo4j.SessionConfig{AccessMode: neo4j.AccessModeWrite})
		defer session.Close(c)

		// Run Cypher query to create the node
		_, err := session.Run(c, `
			CREATE (v:Vacancy {
				id: $id,
				title: $title,
				description: $description,
				start_date: $start_date,
				careers: $careers,
				company_id: $company_id
			})
			RETURN v.id AS id
		`, map[string]interface{}{
			"id":          id,
			"title":       vacancy.Title,
			"description": vacancy.Description,
			"start_date":  vacancy.StartDate,
			"careers":     vacancy.Careers,
			"company_id":  vacancy.CompanyID,
		})

		if err != nil {
			println("Error Neo4j:", err.Error())
			c.JSON(500, gin.H{"error": "Error al crear la vacante"})
			return
		}

		// Send back a success response
		c.JSON(201, gin.H{
			"id":      id,
			"message": "Vacante creada exitosamente",
		})
	})
}
