# Microservice: Access Control Service

## 🧩 Description

This microservice belongs to the **Users** domain of UNIBRIDGE. Its main function is to verify if an authenticated user has permission to access protected resources according to their role.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating routes, controllers, middlewares, and configuration.

- **server.js**: Entry point and server bootstrap.
- **src/app.js**: App configuration, middlewares, and Swagger.
- **src/routes/**: Defines routes and applies middlewares.
- **src/controllers/**: Logic to validate access.
- **src/middleware/**: Contains JWT token verification middleware.

## 🗂️ Folder-level architecture

```markdown
access-control-service/
├── .env
├── package-lock.json
├── package.json
├── server.js
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── access.routes.js
│   ├── controllers/
│   │   └── access.controller.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── swagger/
│       └── swagger.js
```

## 💡 Design patterns applied

- **KISS:** Simple and easy-to-maintain code.
- **SRP:** Each file has a single, clear responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint to be used by other services or the frontend to verify access permissions.
