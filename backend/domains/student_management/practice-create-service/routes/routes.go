package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-create-service/controllers"
)

func SetupRoutes() *gin.Engine {
	router := gin.Default()

	api := router.Group("/api/practice")
	{
		api.POST("/create", controllers.CreatePracticeHandler)
	}

	return router
}
