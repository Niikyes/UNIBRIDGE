package main

import (
	"log"
	"os"

	"practice-get-service/config"
	"practice-get-service/routes"
)

func main() {
	// Connect to the database
	config.ConnectDB()

	// Set up API routes
	router := routes.SetupRoutes()

	// Read port from environment or default to 5001
	port := os.Getenv("PORT")
	if port == "" {
		port = "5001"
	}

	// Start the server
	log.Printf("🌐 Practice Get Service running on http://localhost:%s", port)
	router.Run(":" + port)
}
