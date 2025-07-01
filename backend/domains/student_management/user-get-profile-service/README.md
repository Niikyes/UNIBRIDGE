# Microservice: User Get Profile Service

## 🧩 Description

This microservice belongs to the **Users** domain of UNIBRIDGE. Its main purpose is to retrieve and return the complete profile of the authenticated user, including extra information depending on their role (student, company, etc.).

## ⚙️ Architecture style

The microservice uses a **modular architecture with FastAPI**, separating routes, services, and the main entry file for clarity and maintainability.

- **main.py**: Application entry point and general configuration.
- **routers/**: Defines routes and basic validations.
- **services/**: Contains business logic to decode the token and query the database.

## 🗂️ Folder-level architecture

```markdown
user-get-profile-service/
├── .env
├── main.py
├── README.md
├── requirements.txt
├── swagger.yaml
├── routers/
│   ├── profile.py
│   └── __pycache__/
├── services/
│   ├── profile_service.py
│   └── __pycache__/
├── __pycache__/
```

## 💡 Design patterns applied

- **KISS:** Simple and straightforward code.
- **SRP:** Each module has a single, well-defined responsibility.

## 🔗 Communication with other microservices

It does not currently communicate directly with other microservices but exposes a REST endpoint to be consumed by the frontend and other services to retrieve the detailed profile of the authenticated user.
