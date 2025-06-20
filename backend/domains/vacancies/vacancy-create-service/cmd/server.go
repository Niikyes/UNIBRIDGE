package cmd

import (
	"context"
	"log"

	"github.com/gin-gonic/gin"
	neo4jDriver "github.com/neo4j/neo4j-go-driver/v5/neo4j" // alias para evitar conflicto

	"github.com/Niikyes/UNIBRIDGE/backend/domains/vacancies/vacancy-create-service/adapters/handlers"
	customNeo4j "github.com/Niikyes/UNIBRIDGE/backend/domains/vacancies/vacancy-create-service/infrastructure/neo4j"
)

func StartServer() {
	ctx := context.Background()

	// Conexión al driver oficial
	driver, err := neo4jDriver.NewDriverWithContext(
		"bolt://localhost:7687",
		neo4jDriver.BasicAuth("neo4j", "password", ""),
	)
	if err != nil {
		log.Fatalf("Error al conectar con Neo4j: %v", err)
	}
	defer driver.Close(ctx)

	router := gin.Default()

	// Registro de rutas (le pasamos el driver oficial)
	handlers.RegisterVacancyRoutes(router, driver)

	log.Println("🚀 Servidor escuchando en http://localhost:8080")
	router.Run(":8080")
}
