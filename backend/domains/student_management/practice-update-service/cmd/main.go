package main

import (
	"log"
	"os"

	"practice-update-service/config"
	"practice-update-service/routes"
)

func main() {
	// Connect to the database
	config.ConnectDB()

	// Setup routes
	router := routes.SetupRoutes()

	// Load port from .env or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "5002"
	}

	// Start the server
	log.Printf("Practice Update Service running on http://localhost:%s", port)
	router.Run(":" + port)
}
