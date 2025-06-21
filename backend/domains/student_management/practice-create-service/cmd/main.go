package main

import (
	"log"
	"os"

	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-create-service/config"
	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-create-service/routes"
)

func main() {
	config.ConnectDB()
	router := routes.SetupRoutes()

	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}

	log.Printf("Running on http://localhost:%s", port)
	router.Run(":" + port)
}
