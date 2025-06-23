# student-apply-vacancy-service

This microservice allows a student to apply to a published internship vacancy.

## 🛠 Technologies

- Language: Go
- Architecture: Clean Architecture
- Style: Event-Driven Ready (currently HTTP REST)
- Pattern: Command Pattern
- Database: PostgreSQL (`user_db`)
- Communication: HTTP (future support for RabbitMQ)

## 📌 Endpoint

### POST `/api/apply`

Allows a student to apply for a specific vacancy.

#### Request Body

```json
{
  "estudiante_id": "uuid",
  "vacante_id": 1
}
```

#### Response

```json
{
  "message": "Aplicación exitosa"
}
```

## ✅ Requirements

- An existing student in the `estudiantes` table
- An existing vacancy in the `vacantes` table
- PostgreSQL connection configured in `.env`

## 🧪 Testing with Postman

1. Run the service: `go run ./cmd/main.go`
2. POST to `http://localhost:3008/api/apply` with a valid body.
