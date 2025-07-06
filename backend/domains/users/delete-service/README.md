# Microservice: Delete Service

## 🧩 Description

This microservice belongs to the **Users** domain of UNIBRIDGE. Its main function is to securely delete existing users on the platform, applying validations and restrictions as required.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating routes, controllers, services, and middlewares.

- **server.js**: Main entry point.
- **src/app.js**: App configuration and middlewares.
- **src/routes/**: Defines user routes.
- **src/controllers/**: Controllers with logic to delete users.
- **src/services/**: Contains business logic and database interactions.
- **src/models/**: User models.

## 🗂️ Folder-level architecture

```markdown
delete-service/
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
│       └── validateDelete.js
```

## 💡 Design patterns applied

- **KISS:** Clear and straightforward code.
- **SRP:** Each module has a single, well-defined responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint that can be consumed by the frontend or administrative services to handle user deletions.
