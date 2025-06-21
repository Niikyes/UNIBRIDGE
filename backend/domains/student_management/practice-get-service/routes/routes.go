package routes

import (
	"github.com/gin-gonic/gin"
	"practice-get-service/controllers"
)

// SetupRoutes configures the available routes for the microservice
func SetupRoutes() *gin.Engine {
	router := gin.Default()

	// Group API routes under /api/practice
	api := router.Group("/api/practice")
	{
		// GET /api/practice/:estudiante_id?status=
		api.GET("/:estudiante_id", controllers.GetPracticesHandler)
	}

	return router
}
