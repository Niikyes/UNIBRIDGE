# Microservice: Create Service

## 🧩 Description

This microservice belongs to the **Users** domain of UNIBRIDGE. Its main function is to create new users in the system, including validations, password hashing, and assignment of basic information.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating routes, controllers, services, and middlewares.

- **server.js**: Main entry point.
- **src/app.js**: App configuration and middlewares.
- **src/routes/**: Defines user-related routes.
- **src/controllers/**: Logic to create users.
- **src/services/**: Contains business logic to create users and manage the database.
- **src/models/**: User data models.

## 🗂️ Folder-level architecture

```markdown
create-service/
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
│       └── hash.js
```

## 💡 Design patterns applied

- **KISS:** Simple and easy-to-maintain code.
- **SRP:** Each module has a single, well-defined responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint to be consumed by the frontend or administrative services to create users.
