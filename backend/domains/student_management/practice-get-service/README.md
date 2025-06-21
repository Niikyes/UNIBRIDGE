# Practice Get Service

This microservice belongs to the **Student Management Domain** of the UNIBRIDGE platform. It allows querying a student's practices.

## 🧩 Responsibilities

- Retrieve practices by student ID
- Filter practices by status (optional)
- Return JSON list of results

## 🛠 Technologies

- Language: Go
- Framework: Gin
- DB: PostgreSQL
- Architecture: REST + Protobuf (contract)

## 🚀 Endpoint

**GET** `/api/practice/{estudiante_id}?status=en_progreso`

## 🧪 Example Response

```json
[
  {
    "id": 1,
    "vacante_id": 12,
    "fecha_inicio": "2025-07-01T00:00:00Z",
    "fecha_fin": "2025-09-30T00:00:00Z",
    "tutor_academico_id": "uuid",
    "tutor_empresarial_id": "uuid",
    "estado": "en_progreso"
  }
]
```

## 📦 Structure

```
practice-get-service/
├── cmd/
├── config/
├── controllers/
├── models/
├── repository/
├── routes/
├── protos/
├── .env
├── go.mod
├── go.sum
```

## 📄 License

Academic use only. Part of UNIBRIDGE system.
