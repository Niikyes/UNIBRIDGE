# Folder: Domains

## 📄 General description

The **domains** folder organizes and groups all business domains implemented in the UNIBRIDGE backend. Each domain represents a set of independent microservices focused on specific system functionalities.

This modular structure facilitates scalability, maintenance, and platform security.

## 🧩 Included domains

- **auth**: Responsible for authentication, registration, and user verification.
- **student_management**: Manages processes and operations related to students (vacancy applications, profile).
- **users**: Full administration of users, roles, and access control.
- **vacancy**: Management of creating and retrieving vacancies.

## ⚙️ General technologies used

- Node.js
- Express.js
- Go
- Python (FastAPI)
- Ruby (Sinatra)
- JWT
- PostgreSQL
- Docker

## 🗂️ Suggested structure

```markdown
domains/
├── auth/
├── student_management/
├── users/
├── vacancy/
```

## 🚀 Expected use

Each domain can be deployed and tested independently, or integrated via an API Gateway or Docker Compose for the full environment. This organization allows teams to work in a parallel and modular way.
