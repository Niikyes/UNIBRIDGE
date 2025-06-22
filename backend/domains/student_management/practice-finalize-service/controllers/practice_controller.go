package controllers

import (
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"practice-finalize-service/models"
	"practice-finalize-service/repository"
)

// FinalizePracticeHandler handles the request to finalize a practice
func FinalizePracticeHandler(c *gin.Context) {
	// Get ID from URL path
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid practice ID"})
		return
	}

	// Parse JSON body
	var payload struct {
		FechaFin string `json:"fecha_fin"`
	}
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}

	// Parse date string
	endDate, err := time.Parse("2006-01-02", payload.FechaFin)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid date format. Use YYYY-MM-DD"})
		return
	}

	// Construct practice model
	practice := models.Practice{
		ID:       id,
		FechaFin: endDate,
		Estado:   "finalizada",
	}

	// Finalize in DB
	err = repository.FinalizePractice(practice)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to finalize practice"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Practice finalized successfully"})
}
