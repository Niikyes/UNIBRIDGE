package routes

import (
	"github.com/gin-gonic/gin"
	"practice-update-service/controllers"
)

// SetupRoutes configures the route handlers for the microservice
func SetupRoutes() *gin.Engine {
	router := gin.Default()

	api := router.Group("/api/practice")
	{
		// PUT /api/practice/:id
		api.PUT("/:id", controllers.UpdatePracticeHandler)
	}

	return router
}
