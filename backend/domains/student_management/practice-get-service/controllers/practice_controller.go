package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"practice-get-service/repository"
)

// GetPracticesHandler handles the GET request to fetch practices by student ID
func GetPracticesHandler(c *gin.Context) {
	// Extract path parameter
	studentID := c.Param("estudiante_id")

	// Extract optional query parameter
	status := c.Query("status")

	// Call repository to retrieve practices
	practices, err := repository.GetPracticesByStudentID(studentID, status)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to retrieve practices",
		})
		return
	}

	// Return results as JSON array
	c.JSON(http.StatusOK, practices)
}
