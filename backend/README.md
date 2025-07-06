# UNIBRIDGE Backend

## 📄 General description

The **UNIBRIDGE** backend is designed as a distributed system based on microservices. Each domain contains specialized and decoupled services to provide high scalability, maintainability, and security.

This backend handles user authentication, user and access management, student management, and vacancy management.

## 🧩 Domains structure

- **auth**: User authentication and registration.
- **student_management**: Management of student-related processes.
- **users**: Full user and role administration.
- **vacancy**: Vacancy management.

## ⚙️ Main technologies

- Node.js
- Express.js
- Go
- Python (FastAPI)
- Ruby (Sinatra)
- JWT
- PostgreSQL
- Docker

## 🚀 Main features

- Microservice-based architecture.
- REST communication between services.
- JWT for secure session handling.
- Ready for Docker containers and orchestration with Docker Compose.
- Integration with PostgreSQL databases.

## 🗂️ Suggested general structure

```markdown
backend/
├── domains/
│   ├── auth/
│   ├── student_management/
│   ├── users/
│   └── vacancy/
├── docker-compose.yml
├── README.md
```

## 💡 Expected use

The backend can be deployed independently or together with the UNIBRIDGE frontend, enabling secure and flexible integrations.
