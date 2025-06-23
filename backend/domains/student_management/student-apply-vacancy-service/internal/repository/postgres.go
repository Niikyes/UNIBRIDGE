package repository

import (
    "context"
    "database/sql"
    "student-apply-vacancy-service/internal/domain"

    _ "github.com/jackc/pgx/v5/stdlib"
)

func NewPostgresDB(connStr string) (*sql.DB, error) {
    db, err := sql.Open("pgx", connStr)
    if err != nil {
        return nil, err
    }
    return db, nil
}

func SavePostulacion(db *sql.DB, p domain.Postulacion) error {
    query := `
    INSERT INTO postulaciones (estudiante_id, vacante_id, estado)
    VALUES ($1, $2, $3)
    `
    _, err := db.ExecContext(context.Background(), query, p.EstudianteID, p.VacanteID, p.Estado)
    return err
}
