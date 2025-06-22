package routes

import (
	"github.com/gin-gonic/gin"
	"practice-finalize-service/controllers"
)

// SetupRoutes registers the endpoint for finalizing a practice
func SetupRoutes() *gin.Engine {
	router := gin.Default()

	api := router.Group("/api/practice")
	{
		// PUT /api/practice/:id/finalize
		api.PUT("/:id/finalize", controllers.FinalizePracticeHandler)
	}

	return router
}
