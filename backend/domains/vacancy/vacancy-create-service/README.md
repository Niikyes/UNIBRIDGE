# Microservice: vacancy-create-service

This microservice is part of the UNIBRIDGE platform and allows companies to register new job vacancies.

## 📌 Endpoint

**POST** `/api/vacancies`

### 🧾 Request Body (JSON)

```json
{
  "titulo": "Backend Developer",
  "descripcion": "Responsible for maintaining the system APIs.",
  "empresa_id": 1,
  "ciudad": "Quito",
  "carrera": "Software Engineering",
  "estado": "active",
  "fecha_publicacion": "2025-06-22"
}
```

### ✅ Successful Response

```json
{
  "message": "Vacancy created successfully"
}
```

## 🛠️ Technologies Used

- Language: **Ruby**
- Framework: **Sinatra**
- Database: **PostgreSQL**
- Architecture style: **REST**

## ▶️ Running Locally

1. Install dependencies using `bundle install`
2. Create a `.env` file with the necessary PostgreSQL connection variables
3. Run the microservice:

```bash
ruby app.rb -p 5005
```

## 📁 Project Structure

- `app.rb`: Main logic for the endpoint.
- `config/database.rb`: PostgreSQL connection file.
- `.env`: Environment variable definitions.
- `Gemfile`: Dependency declarations.