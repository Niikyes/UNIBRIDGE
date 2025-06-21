package config

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/joho/godotenv"
	"github.com/jackc/pgx/v5"
)

var DB *pgx.Conn

func LoadEnv() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}
}

func ConnectDB() {
	LoadEnv()

	connStr := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"),
	)

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	conn, err := pgx.Connect(ctx, connStr)
	if err != nil {
		fmt.Println("Failed to connect to database:", err)
		os.Exit(1)
	}

	DB = conn
	fmt.Println("✅ Connected to PostgreSQL")
}
