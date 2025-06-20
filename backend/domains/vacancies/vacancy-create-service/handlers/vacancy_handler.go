package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

func RegisterVacancyRoutes(router *gin.Engine, driver neo4j.DriverWithContext) {
	// Ruta temporal para probar si todo está bien
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "pong"})
	})
}
