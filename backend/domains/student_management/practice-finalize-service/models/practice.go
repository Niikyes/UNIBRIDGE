package models

import "time"

// Practice represents a practice record that can be finalized
type Practice struct {
	ID         int       `json:"id"`
	FechaFin   time.Time `json:"fecha_fin"`
	Estado     string    `json:"estado"`
}
