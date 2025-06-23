package command

type ApplyPostulacionCommand struct {
    EstudianteID string `json:"estudiante_id"`
    VacanteID    int    `json:"vacante_id"`
}
