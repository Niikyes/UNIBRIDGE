# Microservice: Password Reset Service

## 🧩 Description

This microservice belongs to the **Auth** domain of UNIBRIDGE. Its purpose is to handle the final password reset after a user requests a reset token. It validates the received token and securely updates the new password.

## ⚙️ Architecture style

This service uses an **n-layer architecture** based on a modular **MVC style**, which separates logic into different layers to facilitate maintainability and scalability.

- **Routes:** Define public endpoints.
- **Controllers:** Process requests, validate data, and coordinate logic.
- **Services:** Contain business logic (validate token, update password).
- **Models:** Represent the user entity and interact with the database using Sequelize.
- **Config:** Database and other dependency configurations.

## 🗂️ Folder-level architecture

```markdown
password-reset-service/
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

- **KISS:** The code is kept simple and straightforward.
- **SRP:** Each file (controller, service, model) has a single responsibility.

## 🔗 Communication with other microservices

Currently, it does not directly communicate with other microservices. It exposes REST endpoints to be consumed by the frontend and other services as part of the overall authentication flow.
