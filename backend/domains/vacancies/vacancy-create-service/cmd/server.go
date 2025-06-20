package cmd

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j"

	"vacancy-create-service/adapters/handlers"
	"vacancy-create-service/infrastructure/neo4j"
)

func StartServer() {
	// Conectar a Neo4j
	driver, err := neo4j.NewDriverWithContext(
		"bolt://localhost:7687",
		neo4j.BasicAuth("neo4j", "password", ""),
	)
	if err != nil {
		log.Fatalf("Error al conectar con Neo4j: %v", err)
	}
	defer driver.Close()

	router := gin.Default()

	// Registrar rutas
	handlers.RegisterVacancyRoutes(router, driver)

	log.Println("🚀 Servidor escuchando en http://localhost:8080")
	router.Run(":8080")
}
