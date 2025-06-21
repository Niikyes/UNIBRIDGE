package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-create-service/models"
	"github.com/Niikyes/UNIBRIDGE/backend/domains/student_management/practice-create-service/repository"
)

func CreatePracticeHandler(c *gin.Context) {
	var newPractice models.Practice

	if err := c.ShouldBindJSON(&newPractice); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}

	id, err := repository.CreatePractice(newPractice)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create practice"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message":     "Practice created successfully",
		"practice_id": id,
	})
}
