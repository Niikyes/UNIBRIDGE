package handler

import (
    "database/sql"
    "encoding/json"
    "log"
    "net/http"
    "student-apply-vacancy-service/internal/command"
    "student-apply-vacancy-service/internal/usecase"

    "github.com/gorilla/mux"
)

// NewRouter initializes the HTTP routes and injects the database connection.
func NewRouter(db *sql.DB) *mux.Router {
    router := mux.NewRouter()

    // POST /api/apply endpoint
    router.HandleFunc("/api/apply", func(w http.ResponseWriter, r *http.Request) {
        var cmd command.ApplyPostulacionCommand

        // Decode JSON body
        if err := json.NewDecoder(r.Body).Decode(&cmd); err != nil {
            http.Error(w, "Invalid JSON: "+err.Error(), http.StatusBadRequest)
            return
        }

        // Debug: log the received payload
        log.Println("Payload recibido:", cmd)
        log.Println("EstudianteID:", cmd.EstudianteID)
        log.Println("VacanteID:", cmd.VacanteID)

        // Basic validation
        if cmd.EstudianteID == "" || cmd.VacanteID <= 0 {
            http.Error(w, "Required fields are missing or invalid", http.StatusBadRequest)
            return
        }

        // Execute business logic
        err := usecase.ApplyToVacancy(db, cmd)
        if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }

        // Success response
        w.WriteHeader(http.StatusCreated)
        json.NewEncoder(w).Encode(map[string]string{"message": "Aplicación exitosa"})
    }).Methods("POST")

    return router
}

