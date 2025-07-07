# Domain: Student Management

## 📄 General description

The **Student Management** domain is responsible for managing processes and operations related to students in UNIBRIDGE. It includes microservices that allow students to view available vacancies, apply to them, and consult their profiles.

## 🧩 Included microservices

- **student-apply-vacancy-service**: Allows a student to apply for a published vacancy.
- **student-view-vacancies-service**: Allows students to view the full list of available vacancies.
- **user-get-profile-service**: Allows a student to consult and view their current profile in the system.

## ⚙️ Technologies used

- Go (student-apply-vacancy-service)
- Python (FastAPI) (student-view-vacancies-service)
- Node.js (user-get-profile-service)
- PostgreSQL
- JWT
- Docker

## 🌐 Reference ports

3020, 5004, 5006 (depending on the microservice)

## 🗂️ Suggested structure

```markdown
student_management/
├── student-apply-vacancy-service/
├── student-view-vacancies-service/
├── user-get-profile-service/
```

## 🚀 Expected use

This domain focuses on student operational flows, facilitating the managements of their applications to vacancies and access to their personal information in UNIBRIDGE.
