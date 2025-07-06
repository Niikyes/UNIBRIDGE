# Microservice: Student View Vacancies Service

## 🧩 Description

This microservice belongs to the **Student Management** domain of UNIBRIDGE. Its main function is to allow students to view available vacancies by consuming data from another vacancies microservice.

## ⚙️ Architecture style

The microservice follows a lightweight architecture with **FastAPI**, using a **modular** style that separates configuration, routes, and the main entry point.

- **app/main.py**: Entry point and general FastAPI configuration.
- **app/routes.py**: Defines routes and logic to consume the external service.
- **app/config.py**: Configuration for environment variables and external URL.

## 🗂️ Folder-level architecture

```markdown
student-view-vacancies-service/
├── .env
├── README.md
├── requirements.txt
├── swagger.yaml
├── app/
│   ├── config.py
│   ├── main.py
│   ├── routes.py
│   └── __pycache__/
```

## 💡 Design patterns applied

- **KISS:** Simple and straightforward code.
- **SRP:** Each module has a single responsibility.

## 🔗 Communication with other microservices

Consumes an external vacancies microservice via HTTP (REST) using `httpx`. It does not directly communicate with other services beyond this consumption.
