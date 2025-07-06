# Microservice: Vacancy Get All Service

## 🧩 Description

This microservice belongs to the **Vacancy** domain of UNIBRIDGE. Its main function is to fetch and return all registered vacancies on the platform.

## ⚙️ Architecture style

The microservice uses a **modular architecture with FastAPI**, separating configuration, models, routes, and core logic.

- **app/main.py**: Entry point and main configuration.
- **app/routes.py**: Defines routes and operations related to vacancies.
- **app/models.py**: Database models.
- **app/config.py**: General configuration (environment variables).
- **app/db.py**: Database connection.

## 🗂️ Folder-level architecture

```markdown
vacancy-get-all-service/
├── .env
├── README.md
├── requirements.txt
├── swagger.yaml
├── app/
│   ├── config.py
│   ├── db.py
│   ├── main.py
│   ├── models.py
│   ├── routes.py
│   └── __pycache__/
```

## 💡 Design patterns applied

- **KISS:** Simple and straightforward code.
- **SRP:** Each module has a single, clear responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint to be consumed by the frontend or other services needing to fetch the list of vacancies.
