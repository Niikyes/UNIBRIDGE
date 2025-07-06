# Microservice: Logout Service

## 🧩 Description

This microservice belongs to the **Auth** domain of UNIBRIDGE. Its main purpose is to handle user logout, deleting or invalidating the current token to ensure users can no longer access protected resources.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating responsibilities for greater clarity and easier maintenance.

- **Routes:** Define the logout endpoint.
- **Controllers:** Process the request, coordinate logic, and handle the token.
- **Services:** Contain logic to invalidate the token.
- **Config:** Global parameters or blacklist if persistent invalidation is used.

## 🗂️ Folder-level architecture

```markdown
logout-service/
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
│   │   └── logout.routes.js
│   ├── controllers/
│   │   └── logout.controller.js
│   ├── services/
│   │   └── logout.service.js
│   └── config/
│       └── blacklist.js
├── swagger/
│   └── swagger.js
```

## 💡 Design patterns applied

- **KISS:** Simple and easy-to-understand code.
- **SRP:** Each file has a single, well-defined responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint that is consumed by the frontend or services requiring to finalize user sessions.
