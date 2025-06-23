# user-get-profile-service

This microservice allows retrieving the authenticated user's profile based on a JWT token. It was created specifically to support the frontend functionality of the `student-apply-vacancy-service` by providing student details securely.

## 🚀 Technologies

- **Language**: Python
- **Framework**: FastAPI
- **Database**: PostgreSQL (`user_db`)
- **Authentication**: JWT (`Authorization: Bearer <token>`)
- **Docs**: Swagger UI (auto-generated at `/docs`)

## ⚙️ Architecture

- **Style**: REST (HTTP + JSON)
- **Internal Architecture**: Modular (Router + Services)
- **Design Patterns**:
  - Service Layer
  - KISS
  - DRY
  - POLA
  - Token-Based Authentication

## 📌 Endpoint

### `GET /api/profile`

Returns user information based on the JWT token.

#### Headers

```
Authorization: Bearer <jwt_token>
```

#### Example Responses

**Estudiante:**
```json
{
  "user_id": "uuid",
  "nickname": "Nicole",
  "email": "nicole@correo.com",
  "role": "estudiante",
  "estudiante_id": "uuid",
  "universidad_id": "uuid",
  "carrera_id": "uuid",
  "facultad_id": "uuid"
}
```

**Empresa:**
```json
{
  "user_id": "uuid",
  "nickname": "TechCorp",
  "email": "contacto@techcorp.com",
  "role": "empresa",
  "empresa_id": "uuid",
  "esta_aprobada": true
}
```

## 🧪 Run locally

```bash
uvicorn main:app --reload
```
