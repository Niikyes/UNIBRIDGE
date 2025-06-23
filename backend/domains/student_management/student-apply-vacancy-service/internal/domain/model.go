package domain

import "time"

type Postulacion struct {
    ID               int       `json:"id"`
    EstudianteID     string    `json:"estudiante_id"`
    VacanteID        int       `json:"vacante_id"`
    FechaPostulacion time.Time `json:"fecha_postulacion"`
    Estado           string    `json:"estado"`
}
