# Microservice: Get Service

## 🧩 Description

This microservice belongs to the **Users** domain of UNIBRIDGE. Its main function is to retrieve user information, allowing listing and individual queries.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating routes, controllers, and services.

- **server.js**: Main entry point.
- **src/app.js**: General configuration and middlewares.
- **src/routes/**: Defines user routes.
- **src/controllers/**: Controllers containing logic to retrieve users.
- **src/services/**: Contains business logic and database access.
- **src/models/**: User models.

## 🗂️ Folder-level architecture

```markdown
get-service/
├── .env
├── package-lock.json
├── package.json
├── server.js
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── user.routes.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── services/
│   │   └── user.service.js
│   ├── models/
│   │   └── User.js
│   └── utils/
│       └── validateGet.js
```

## 💡 Design patterns applied

- **KISS:** Clear and simple code.
- **SRP:** Each module has a single, well-defined responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint to be consumed by the frontend or administrative services that need to query users.
