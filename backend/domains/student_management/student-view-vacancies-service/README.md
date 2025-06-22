# Student View Vacancies Service

This microservice belongs to the **Student Management Domain** of the UNIBRIDGE platform. It allows students to view all available active vacancies by consuming the `vacancy-get-all-service`.

## 🧩 Responsibilities

- Expose an endpoint for students to list all active vacancies.
- Act as a client to the vacancy service.
- Return JSON-formatted results from the external microservice.

## 🛠 Technologies

- Language: Python
- Framework: FastAPI
- Architecture: REST
- External communication: HTTP via `httpx`

## 🚀 Endpoint

**GET** `/api/student/vacancies`

## ⚙️ Config

The service loads the vacancy URL from the `.env` file:

```env
VACANCY_SERVICE_URL=http://localhost:8000/api/vacancies
```

## 📦 Structure

```
student-view-vacancies-service/
├── app/
│   ├── main.py
│   ├── config.py
│   └── routes.py
├── .env
├── requirements.txt
├── README.md
```

## 📄 License

For academic use only as part of the UNIBRIDGE system.
