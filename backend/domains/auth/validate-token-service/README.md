# Microservice: Validate Token Service

## 🧩 Description

This microservice belongs to the **Auth** domain of UNIBRIDGE. Its purpose is to validate JWT tokens sent by clients to verify their authenticity and allow access to protected resources.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating business logic, controllers, and routes to facilitate maintainability.

- **Routes:** Define the endpoint for token validation.
- **Controllers:** Process requests, extract and validate the token.
- **Services:** Contain logic to verify and decode the token.
- **Config:** General configuration and JWT keys.

## 🗂️ Folder-level architecture

```markdown
validate-token-service/
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
│   │   └── validate.routes.js
│   ├── controllers/
│   │   └── validate.controller.js
│   ├── services/
│   │   └── validate.service.js
│   └── config/
│       └── jwt.js
├── swagger/
│   └── swagger.js
```

## 💡 Design patterns applied

- **KISS:** Simple and clear code, easy to understand.
- **SRP:** Each file has a unique and well-defined responsibility (controller, service, configuration).

## 🔗 Communication with other microservices

This microservice does not directly communicate with others but exposes a REST endpoint that can be consumed by other microservices or frontend applications needing to validate a token for access authorization.
