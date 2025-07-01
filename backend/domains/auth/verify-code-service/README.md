# Microservice: Verify Code Service

## 🧩 Description

This microservice belongs to the **Auth** domain of UNIBRIDGE. Its main function is to verify confirmation codes sent to users (e.g., during registration or account recovery) to validate their identity.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating responsibilities to maintain clarity and ease of maintenance.

- **Routes:** Define the endpoint for code verification.
- **Controllers:** Process the request, validate data, and call the service.
- **Services:** Contain logic to validate and verify the received code.
- **Models:** Handle the verification entity and its persistence.
- **Config:** Database configuration and other parameters.

## 🗂️ Folder-level architecture

```markdown
verify-code-service/
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
│   │   └── verify.routes.js
│   ├── controllers/
│   │   └── verify.controller.js
│   ├── services/
│   │   └── verify.service.js
│   ├── models/
│   │   └── code.model.js
│   └── config/
│       └── database.js
├── swagger/
│   └── swagger.js
```

## 💡 Design patterns applied

- **KISS:** Simple and straightforward code, easy to understand.
- **SRP:** Each file has a single, well-defined responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint to be consumed by the frontend or services that need to verify a code before allowing a protected action.
