# Practice Finalize Service

This microservice is part of the **Student Management Domain** of the UNIBRIDGE platform. It finalizes a professional practice.

## 🧩 Responsibilities

- Mark a practice as "finalizada"
- Update end date if provided
- Write changes to PostgreSQL

## 🛠 Technologies

- Language: Go
- Framework: Gin
- DB: PostgreSQL
- Architecture: REST + Protobuf

## 🚀 Endpoint

**PUT** `/api/practice/{id}/finalize`

## 🔁 Example Request

```json
{
  "fecha_fin": "2025-09-30"
}
```

## 📦 Structure

```
practice-finalize-service/
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
