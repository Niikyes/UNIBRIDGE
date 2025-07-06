# List Entity Service

This microservice provides lists of students, companies, and coordinators.

## 🚀 Tech stack

- Node.js
- Express
- Sequelize
- PostgreSQL
- JWT Authentication
- Swagger

## 🏁 Setup

1️⃣ Install dependencies:

```bash
npm install
```

2️⃣ Copy `.env.example` to `.env` and set DB URL and JWT secret.

3️⃣ Run:

```bash
npm run dev
```

4️⃣ Swagger docs:

```
http://localhost:3017/api-docs
```

## 🔒 Authorization

Use header:

```
Authorization: Bearer <your_token>
```

## ✉️ Endpoints

- **GET** `/api/entities/list/estudiante`: List students.
- **GET** `/api/entities/list/empresa`: List companies.
- **GET** `/api/entities/list/coordinador`: List coordinators.
