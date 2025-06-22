# Vacancy Get All Service

This microservice belongs to the **Vacancies Domain** of the UNIBRIDGE platform. It allows retrieving all published job vacancies.

## 🧩 Responsibilities

- Expose an API to list all active vacancies.
- Fetch data from PostgreSQL.
- Return JSON-formatted results.

## 🛠 Technologies

- Language: Python
- Framework: FastAPI
- Database: PostgreSQL
- Architecture: REST

## 🚀 Endpoint

**GET** `/api/vacancies`

## 📦 Structure

```
vacancy-get-all-service/
├── app/
│   ├── main.py
│   ├── config.py
│   ├── db.py
│   ├── models.py
│   └── routes.py
├── .env
├── requirements.txt
├── README.md
```

## 📄 License

For academic use only as part of the UNIBRIDGE system.
