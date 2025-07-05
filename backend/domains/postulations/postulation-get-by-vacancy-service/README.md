# postulation-get-by-vacancy-service

Microservicio para obtener todas las postulaciones de una vacante específica.

## 🚀 Descripción

Permite a la empresa consultar la lista de estudiantes postulados a una vacante publicada.

## 🧩 Tecnologías

- .NET Core 7
- PostgreSQL
- Arquitectura por capas
- Patrón Repository

## ⚙️ Endpoints

### GET `/api/postulations/vacancy/{vacanteId}`

Obtiene las postulaciones de una vacante.

#### Respuesta

```json
[
  {
    "id": 1,
    "estudianteId": 23,
    "vacanteId": 5,
    "estado": "pendiente",
    "fechaPostulacion": "2024-06-25",
    "comentarios": ""
  }
]