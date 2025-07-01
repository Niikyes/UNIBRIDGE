# Microservice: Disable Service

## 🧩 Description

This microservice belongs to the **Users** domain of UNIBRIDGE. Its main function is to disable existing users, marking them as inactive in the database without physically deleting them.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating routes, controllers, and services.

- **server.js**: Main entry point.
- **src/app.js**: General application configuration.
- **src/routes/**: Defines user routes.
- **src/controllers/**: Controllers containing logic to disable users.
- **src/services/**: Contains business logic and database updates.
- **src/models/**: User models.

## 🗂️ Folder-level architecture

```markdown
disable-service/
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
│       └── validateDisable.js
```

## 💡 Design patterns applied

- **KISS:** Simple and easy-to-maintain code.
- **SRP:** Each module has a single, clear responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint to be consumed by the frontend or administrative services managing users.
