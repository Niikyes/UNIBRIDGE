package controllers

import (
	"net/http"
	"time"
	"regexp"

	"github.com/gin-gonic/gin"
	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-create-service/models"
	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-create-service/repository"
)

// Regular expression to validate UUID format
var uuidRegex = regexp.MustCompile(`^[a-fA-F0-9-]{36}$`)

// CreatePracticeHandler handles the creation of a new practice record
func CreatePracticeHandler(c *gin.Context) {
	var newPractice models.Practice

	// Bind JSON input to struct
	if err := c.ShouldBindJSON(&newPractice); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON format"})
		return
	}

	// Validate required fields are not empty
	if newPractice.EstudianteID == "" ||
		newPractice.TutorAcademicoID == "" ||
		newPractice.TutorEmpresarialID == "" ||
		newPractice.FechaInicio == "" ||
		newPractice.FechaFin == "" ||
		newPractice.VacanteID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "All fields are required"})
		return
	}

	// Validate UUID fields
	if !uuidRegex.MatchString(newPractice.EstudianteID) ||
		!uuidRegex.MatchString(newPractice.TutorAcademicoID) ||
		!uuidRegex.MatchString(newPractice.TutorEmpresarialID) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid UUID format in one or more fields"})
		return
	}

	// Parse and validate date fields
	startDate, err1 := time.Parse("2006-01-02", newPractice.FechaInicio)
	endDate, err2 := time.Parse("2006-01-02", newPractice.FechaFin)

	if err1 != nil || err2 != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid date format. Use YYYY-MM-DD"})
		return
	}

	// Check that start date is before end date
	if !startDate.Before(endDate) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Start date must be before end date"})
		return
	}

	// Call repository to insert the new practice
	id, err := repository.CreatePractice(newPractice)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create practice"})
		return
	}

	// Return success response
	c.JSON(http.StatusCreated, gin.H{
		"message":     "Practice created successfully",
		"practice_id": id,
	})
}
