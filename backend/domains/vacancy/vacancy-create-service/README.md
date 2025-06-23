# vacancy-create-service

This microservice allows companies to publish new internship or job vacancies in the UNIBRIDGE platform.

## Endpoint

### POST `/api/vacancies`

Creates a new vacancy in the `vacantes` table.

**Request JSON:**
```
{
  "titulo": "Nombre del cargo",
  "descripcion": "Detalles de la vacante",
  "modalidad": "Presencial | Remoto | Híbrido",
  "ubicacion": "Ciudad o región",
  "fecha_inicio": "YYYY-MM-DD",
  "fecha_fin": "YYYY-MM-DD",
  "carreras_destino": ["Ingeniería en Sistemas"],
  "habilidades": ["Python", "Trabajo en equipo"],
  "empresa_id": "UUID",
  "estado": "publicada"
}
```

**Success Response:**
- 201 Created: `{ "message": "Vacante creada exitosamente" }`

**Error Responses:**
- 400 Bad Request: Campos faltantes o UUID inválido.
- 404 Not Found: Empresa no registrada.
- 500 Internal Server Error: Error de base de datos.

## Environment

`.env` file must include:
```
DB_URL=postgres://postgres:12345@localhost:5432/user_db
PORT=5005
```

## Run

```
bundle install
ruby app.rb -p 5005
```