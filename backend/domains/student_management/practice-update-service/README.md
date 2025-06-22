# Practice Update Service

This microservice is part of the **Student Management Domain** of the UNIBRIDGE platform. It updates an existing professional practice record.

## 🧩 Responsibilities

- Receive and validate update requests
- Modify fields like dates, tutors and status
- Update the database using PostgreSQL

## 🛠 Technologies

- Language: Go
- Framework: Gin
- DB: PostgreSQL
- Architecture: REST + Protobuf

## 🚀 Endpoint

**PUT** `/api/practice/{id}`

## 🔁 Example Body

```json
{
  "fecha_inicio": "2025-08-01",
  "fecha_fin": "2025-10-15",
  "tutor_academico_id": "uuid",
  "tutor_empresarial_id": "uuid",
  "estado": "finalizada"
}
```

## 📦 Structure

```
practice-update-service/
├── cmd/
├── config/
├── controllers/
├── models/
├── repository/
├── routes/
├── protos/
├── .env
├── go.mod
```

## 📄 License

Academic use only. Part of UNIBRIDGE system.
