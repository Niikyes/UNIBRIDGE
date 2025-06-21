package controllers

import (
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"practice-update-service/models"
	"practice-update-service/repository"
)

// UpdatePracticeHandler handles updating an existing practice
func UpdatePracticeHandler(c *gin.Context) {
	// Get ID from path parameter
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid practice ID"})
		return
	}

	// Parse JSON request body
	var payload struct {
		FechaInicio        string `json:"fecha_inicio"`
		FechaFin           string `json:"fecha_fin"`
		TutorAcademicoID   string `json:"tutor_academico_id"`
		TutorEmpresarialID string `json:"tutor_empresarial_id"`
		Estado             string `json:"estado"`
	}

	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}

	// Convert date strings to time.Time
	startDate, err1 := time.Parse("2006-01-02", payload.FechaInicio)
	endDate, err2 := time.Parse("2006-01-02", payload.FechaFin)

	if err1 != nil || err2 != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid date format. Use YYYY-MM-DD"})
		return
	}

	// Create practice model with updated data
	updated := models.Practice{
		ID:                 id,
		FechaInicio:        startDate,
		FechaFin:           endDate,
		TutorAcademicoID:   payload.TutorAcademicoID,
		TutorEmpresarialID: payload.TutorEmpresarialID,
		Estado:             payload.Estado,
	}

	// Call repository to update
	err = repository.UpdatePractice(updated)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update practice"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Practice updated successfully"})
}
