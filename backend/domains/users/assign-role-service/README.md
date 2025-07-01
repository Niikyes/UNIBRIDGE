# Microservice: Assign Role Service

## 🧩 Description

This microservice belongs to the **Users** domain of UNIBRIDGE. Its main function is to allow assigning roles to existing users, controlling hierarchies and permissions according to the actor's role performing the assignment.

## ⚙️ Architecture style

The microservice uses an **n-layer architecture** with a **modular MVC approach**, separating routes, controllers, services, and middlewares.

- **server.js**: Main entry point.
- **src/app.js**: App configuration, middlewares, and Swagger.
- **src/routes/**: Defines user routes.
- **src/controllers/**: Controllers containing role assignment logic.
- **src/services/**: Contains main business logic.
- **src/middleware/**: Authentication middlewares.
- **src/utils/**: Additional validations.

## 🗂️ Folder-level architecture

```markdown
assign-role-service/
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
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Rol.js
│   └── utils/
│       └── validateRole.js
```

## 💡 Design patterns applied

- **KISS:** Clear and easy-to-maintain code.
- **SRP:** Each module has a single, well-defined responsibility.

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint that can be consumed by the frontend or administrative services requiring to assign roles to users.
