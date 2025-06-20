package entities

type VacancyRequest struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	StartDate   string   `json:"start_date"`
	Careers     []string `json:"careers"`
	CompanyID   string   `json:"company_id"`
}
