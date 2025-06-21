package models

import "time"

// Practice represents the fields that can be updated in a practice record
type Practice struct {
	ID                 int       `json:"id"`
	FechaInicio        time.Time `json:"fecha_inicio"`
	FechaFin           time.Time `json:"fecha_fin"`
	TutorAcademicoID   string    `json:"tutor_academico_id"`
	TutorEmpresarialID string    `json:"tutor_empresarial_id"`
	Estado             string    `json:"estado"`
}
