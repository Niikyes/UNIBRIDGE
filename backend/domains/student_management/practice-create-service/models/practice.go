package models

type Practice struct {
	EstudianteID       string `json:"estudiante_id"`
	VacanteID          int    `json:"vacante_id"`
	FechaInicio        string `json:"fecha_inicio"`
	FechaFin           string `json:"fecha_fin"`
	TutorAcademicoID   string `json:"tutor_academico_id"`
	TutorEmpresarialID string `json:"tutor_empresarial_id"`
}
