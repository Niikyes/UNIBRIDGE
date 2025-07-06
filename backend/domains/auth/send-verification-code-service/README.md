# Microservice: Send Verification Code Service

## 🧩 Description

This microservice belongs to the **Auth** domain of UNIBRIDGE. Its main function is to send verification codes to users via email, usually as part of the registration or account verification flow.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating logic to maintain clarity and facilitate maintenance.

- **Routes:** Define public endpoints related to email sending.
- **Controllers:** Receive and process HTTP requests, validate data, and call services.
- **Services:** Contain business logic, such as generating and sending the verification code.
- **Config:** Configure external services (e.g., email) and general parameters.

## 🗂️ Folder-level architecture

```markdown
send-verification-code-service/
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
│   │   └── mail.routes.js
│   ├── controllers/
│   │   └── mail.controller.js
│   ├── services/
│   │   └── mail.service.js
│   └── config/
│       └── mailer.js
├── swagger/
│   └── swagger.js
```

## 💡 Design patterns applied

- **KISS:** The code is clear and simple, making it easy to understand and maintain.
- **SRP:** Each file has a single, specific responsibility (routes, controllers, services).

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes REST endpoints that are used by the frontend or services involved in the registration and verification flow.
