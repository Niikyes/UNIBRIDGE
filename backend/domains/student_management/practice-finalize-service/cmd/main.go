package main

import (
	"log"
	"os"

	"practice-finalize-service/config"
	"practice-finalize-service/routes"
)

func main() {
	// Connect to the database
	config.ConnectDB()

	// Setup routes
	router := routes.SetupRoutes()

	// Load port from environment
	port := os.Getenv("PORT")
	if port == "" {
		port = "5003"
	}

	// Run server
	log.Printf("🌐 Practice Finalize Service running on http://localhost:%s", port)
	router.Run(":" + port)
}
