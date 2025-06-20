package entities

type Vacancy struct {
	ID             string   `json:"id"`
	Title          string   `json:"title"`
	Description    string   `json:"description"`
	StartDate      string   `json:"start_date"`
	EndDate        string   `json:"end_date"`
	Careers        []string `json:"careers"` // Lista de carreras destino
	CompanyID      string   `json:"company_id"` // Asociado al token del login
	Status         string   `json:"status"` // activa, inactiva, ocupada
}
