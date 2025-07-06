# List University Service

This microservice provides lists of universities, faculties, and careers.

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
http://localhost:3018/api-docs
```

## 🔒 Authorization

Use header:

```
Authorization: Bearer <your_token>
```

## ✉️ Endpoints

- **GET** `/api/universities/list/universidad`: List universities.
- **GET** `/api/universities/list/facultad`: List faculties.
- **GET** `/api/universities/list/carrera`: List careers.
