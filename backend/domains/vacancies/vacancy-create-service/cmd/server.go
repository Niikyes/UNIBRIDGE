package cmd

import (
	"context" // Used to control the lifecycle of the driver connection
	"log"

	"github.com/gin-gonic/gin"
	neo4jDriver "github.com/neo4j/neo4j-go-driver/v5/neo4j" // Renamed to avoid conflict with local neo4j package

	"github.com/Niikyes/UNIBRIDGE/backend/domains/vacancies/vacancy-create-service/adapters/handlers"
)

// StartServer inicia el servidor HTTP con Gin y conecta a la base de datos Neo4j
func StartServer() {
	ctx := context.Background() // Create a background context for driver operations

	// Connect to Neo4j database using the official driver
	driver, err := neo4jDriver.NewDriverWithContext(
		"bolt://localhost:7687",                      // Neo4j connection URI
		neo4jDriver.BasicAuth("neo4j", "password", ""), // Username and password
	)
	if err != nil {
		log.Fatalf("Error al conectar con Neo4j: %v", err)
	}Agregar o actualizar análisis o código de seguimient
	defer driver.Close(ctx) // Close the driver connection gracefully

	router := gin.Default() // Create a new Gin router

	// Register all HTTP routes with the router
	handlers.RegisterVacancyRoutes(router, driver)

	log.Println("Servidor escuchando en http://localhost:8080")
	router.Run(":8080") // Start the HTTP server on port 8080
}


