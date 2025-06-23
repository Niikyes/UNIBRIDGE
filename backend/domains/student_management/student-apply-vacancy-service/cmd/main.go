package main

import (
    "log"
    "net/http"
    "student-apply-vacancy-service/config"
    "student-apply-vacancy-service/internal/handler"
    "student-apply-vacancy-service/internal/repository"
)

func main() {
    cfg, err := config.LoadConfig()
    if err != nil {
        log.Fatalf("Error loading config: %v", err)
    }

    db, err := repository.NewPostgresDB(cfg.GetDBConnectionString())
    if err != nil {
        log.Fatalf("Failed to connect to DB: %v", err)
    }

    router := handler.NewRouter(db)
    log.Printf("Server running on port %s...", cfg.ServerPort)
    log.Fatal(http.ListenAndServe(":"+cfg.ServerPort, router))
}
