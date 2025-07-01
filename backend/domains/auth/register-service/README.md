# Microservice: Register Service

## 🧩 Description

This microservice belongs to the **Auth** domain of UNIBRIDGE. Its main purpose is to handle the registration of new users, creating accounts with validated information and storing them in the database.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating logic into independent layers for clarity and maintainability.

- **Routes:** Define public endpoints and group functionalities related to registration.
- **Controllers:** Process HTTP requests, coordinate validation, and call services.
- **Services:** Contain business logic, such as user creation and password hashing.
- **Models:** Represent the user entity and handle persistence with Sequelize.
- **Config:** Defines database and other environment configurations.

## 🗂️ Folder-level architecture

```markdown
register-service/
├── .dockerignore
├── .env
├── Dockerfile
├── package-lock.json
├── package.json
├── server.js
├── src/
│   ├── app.js
│   ├── routes/
│   │   ├── register.routes.js
│   │   └── meta.routes.js
│   ├── controllers/
│   │   ├── register.controller.js
│   │   └── meta.controller.js
│   ├── services/
│   │   └── register.service.js
│   ├── models/
│   │   └── user.model.js
│   └── config/
│       └── database.js
├── swagger/
│   └── swagger.js
```

## 💡 Design patterns applied

- **KISS:** The code is clear and straightforward, making it easy to maintain and understand.
- **SRP:** Each file has a well-defined responsibility (controllers, services, and models).

## 🔗 Communication with other microservices

Currently, it does not directly communicate with other microservices. It exposes REST endpoints to be consumed by the frontend or authentication and authorization-related services.
