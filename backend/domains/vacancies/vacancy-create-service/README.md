# vacancy-create-service

This microservice is responsible for **creating a new internship vacancy** in the UNIBRIDGE platform.  
It receives the necessary data and stores the vacancy as a node in the **Neo4j graph database**.

Each created vacancy includes:
- `title`: Name of the internship position
- `description`: Details about the role
- `start_date`: When the internship begins
- `careers`: List of target careers (e.g., ["SIS", "INF"])
- `company_id`: ID of the company offering the vacancy

---

## 📌 Endpoint

### `POST /vacancy`

Creates a new vacancy.

#### 📥 Request Body (JSON)

```json
{
  "title": "Backend Developer Intern",
  "description": "Assist in building microservices using Go and Neo4j.",
  "start_date": "2025-07-01",
  "careers": ["INF", "SIS"],
  "company_id": "empresa-001"
}
```

#### ✅ Response (201 Created)

```json
{
  "id": "generated-uuid",
  "message": "Vacancy successfully created"
}
```

---

## 🧪 How to run locally

1. Make sure Neo4j is running on `bolt://localhost:7687` and accessible.
2. Run:

```bash
go run main.go
```

---

## ✅ Technologies

- **Language:** Go (Golang)
- **Framework:** Gin
- **Database:** Neo4j
- **Architecture:** Clean Hexagonal
- **Design Pattern:** KISS
