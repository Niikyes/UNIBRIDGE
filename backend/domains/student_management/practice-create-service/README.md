# Practice Create Service

This microservice is part of the **Student Management Domain** of the UNIBRIDGE platform. Its purpose is to create a professional practice record for a student once their application has been accepted by a company.

## 🧩 Responsibilities

- Receive a validated request to create a new practice.
- Validate UUIDs and date formats.
- Insert practice into PostgreSQL database.

## 🚀 Endpoint

**POST** `/api/practice/create`

Creates a new practice record.

### Request Body (JSON)

```json
{
  "estudiante_id": "uuid",
  "vacante_id": 12,
  "fecha_inicio": "2025-07-01",
  "fecha_fin": "2025-09-30",
  "tutor_academico_id": "uuid",
  "tutor_empresarial_id": "uuid"
}
```

### Response

```json
{
  "message": "Practice created successfully",
  "practice_id": 1
}
```

## 🛠 Technologies

- Language: Go
- Framework: Gin
- DB: PostgreSQL
- Architecture: REST + Protobuf (contract)

## 📦 Structure

```
/practice-create-service
├── cmd/                  # main.go entry point
├── config/               # DB config
├── controllers/          # Route handlers
├── models/               # Data models
├── repository/           # DB access
├── routes/               # Endpoint mappings
├── services/             # Business logic (if extended)
├── protos/               # .proto file (compiled to .pb.go)
├── swagger.yaml          # API Documentation
└── .env                  # Environment variables
```

## 🧪 Testing

You can test the service using Postman or Swagger UI.
Ensure the database `unibridge_business` exists and the table `practicas` is created.

## 📄 License

Academic use only. Part of the UNIBRIDGE system.
