# Microservice: Password Request Reset Service

## 🧩 Description

This microservice belongs to the **Auth** domain of UNIBRIDGE. Its main purpose is to handle password reset requests. It allows users to start the password reset flow when they forget or compromise their password, by sending a recovery link or token.

## ⚙️ Architecture style

This service uses an **n-layer architecture** inspired by a modular **MVC style**, clearly separating logic into independent layers for better maintainability and scalability.

- **Routes:** Define and group the public endpoints.
- **Controllers:** Receive requests, validate data, and coordinate logic.
- **Services:** Contain business logic (e.g., sending emails, generating tokens).
- **Models:** Represent entities and handle database interaction using Sequelize.
- **Config:** Configuration for database and other dependencies.

## 🗂️ Folder-level architecture

```markdown
password-request-reset-service/
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
│   │   └── reset.routes.js
│   ├── controllers/
│   │   └── reset.controller.js
│   ├── services/
│   │   └── reset.service.js
│   ├── models/
│   │   └── user.model.js
│   └── config/
│       └── database.js
├── swagger/
│   └── swagger.js
```

## 💡 Design patterns applied

- **KISS:** Keep logic simple and clear.
- **DRY:** Reuse logic in services.
- **SRP (Single Responsibility Principle):** Each file has a single clear responsibility.
- **POLA (Principle of Least Astonishment):** Predictable behavior for developers.

## 🔗 Communication with other microservices

Currently, it does not directly communicate with other microservices. It provides REST endpoints and indirectly integrates by sending reset tokens to users.
