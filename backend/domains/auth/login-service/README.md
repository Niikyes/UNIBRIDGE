# Microservice: Login Service

## 🧩 Description

This microservice belongs to the **Auth** domain of UNIBRIDGE. Its main function is to manage user login, validate their credentials, and generate JWT tokens to allow access to protected resources.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, clearly separating each responsibility to facilitate maintenance and scalability.

- **Routes:** Define the login endpoint.
- **Controllers:** Process the request and coordinate authentication.
- **Services:** Contain logic to validate credentials and generate JWT tokens.
- **Models:** Represent the user entity and handle persistence (with Sequelize).
- **Config:** Database configuration and JWT parameters.

## 🗂️ Folder-level architecture

```markdown
login-service/
├── .dockerignore
├── .env
├── Dockerfile
├── package-lock.json
├── package.json
├── README.md
├── server.js
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── login.routes.js
│   ├── controllers/
│   │   └── login.controller.js
│   ├── services/
│   │   └── login.service.js
│   ├── models/
│   │   └── user.model.js
│   └── config/
│       └── database.js
├── swagger/
│   └── swagger.js
```

## 💡 Design patterns applied

- **KISS:** Clear and simple code, easy to maintain.
- **SRP:** Each module has a single, well-defined responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint that can be used by the frontend or services requiring centralized authentication.
