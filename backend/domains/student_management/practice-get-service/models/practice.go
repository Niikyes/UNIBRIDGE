package models

// Practice represents a single practice record retrieved from the database
type Practice struct {
	ID                 int    `json:"id"`
	VacanteID          int    `json:"vacante_id"`
	FechaInicio        string `json:"fecha_inicio"`
	FechaFin           string `json:"fecha_fin"`
	TutorAcademicoID   string `json:"tutor_academico_id"`
	TutorEmpresarialID string `json:"tutor_empresarial_id"`
	Estado             string `json:"estado"`
}
