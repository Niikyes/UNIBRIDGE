# vacancy-get-all-service

This microservice is part of the `Vacancies` domain in the UNIBRIDGE platform.  
Its purpose is to **retrieve all available internship vacancies** from MongoDB using a **GraphQL API**.

---

## 🚀 Endpoint

### `POST /graphql`

GraphQL endpoint to query all vacancies.

#### 📥 Sample GraphQL Query

```
{
  allVacancies {
    id
    title
    description
    start_date
    careers
    company_id
  }
}
```

#### ✅ Sample Response

```json
{
  "data": {
    "allVacancies": [
      {
        "id": "64e2f1e7ab123...",
        "title": "Backend Intern",
        "description": "Assist in Go microservices.",
        "start_date": "2025-07-01",
        "careers": ["INF", "SIS"],
        "company_id": "empresa-001"
      },
      ...
    ]
  }
}
```

---

## 🧠 Technologies Used

- **Language:** Python
- **Framework:** FastAPI
- **API Style:** GraphQL
- **Database:** MongoDB
- **Architecture:** N-Layers
- **Design Pattern:** DRY
- **Documentation:** Swagger + README

---

## 🛠 Run Locally

Make sure MongoDB is running (default: `mongodb://localhost:27017`).

Then run:

```bash
uvicorn app.main:app --reload
```

Access GraphQL UI at:  
👉 [http://localhost:8000/graphql](http://localhost:8000/graphql)

---

## 📄 Swagger

Although this service uses GraphQL, Swagger documentation is available in `swagger.yaml`.
