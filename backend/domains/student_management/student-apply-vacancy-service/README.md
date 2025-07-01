# Microservice: Student Apply Vacancy Service

## 🧩 Description

This microservice belongs to the **Student Management** domain of UNIBRIDGE. Its main function is to allow a student to apply for a published vacancy, recording the application in the database.

## ⚙️ Architecture style

The microservice uses **Clean Architecture**, separating external dependencies from core business logic. This enhances maintainability, scalability, and testability.

- **cmd/**: Contains the main entry point (`main.go`).
- **config/**: Loads and manages system configurations (ports, database).
- **internal/domain/**: Defines core entities and domain models.
- **internal/repository/**: Implements persistence (PostgreSQL).
- **internal/usecase/**: Contains central business logic (use cases).
- **internal/command/**: Implements the Command pattern for the apply action.
- **internal/handler/**: Defines HTTP controllers and routers.

## 🗂️ Folder-level architecture

```markdown
student-apply-vacancy-service/
├── .env
├── go.mod
├── go.sum
├── README.md
├── swagger.yaml
├── cmd/
│   └── main.go
├── config/
│   └── config.go
├── internal/
│   ├── command/
│   │   └── apply_command.go
│   ├── domain/
│   │   └── model.go
│   ├── handler/
│   │   └── http_handler.go
│   ├── repository/
│   │   └── postgres.go
│   └── usecase/
│       └── apply.go
```

## 💡 Design patterns applied

- **Clean Architecture:** Isolates business logic from infrastructure details.
- **SRP:** Each file and package has a single, clear responsibility.
- **Command Pattern:** Encapsulates the application request as a command.

## 🔗 Communication with other microservices

Currently, it does not directly communicate with other microservices. It exposes an HTTP REST endpoint to be consumed by the frontend or other services to create applications.

