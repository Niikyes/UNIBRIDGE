# postulation-get-by-vacancy-service

Microservice to retrieve all applications for a specific vacancy.

## 🚀 Description

Allows a company to query the list of students who have applied to a published vacancy.

## 🧩 Technologies

- .NET Core 7
- PostgreSQL
- Layered architecture
- Repository pattern

## ⚙️ Endpoints

### GET `/api/postulations/vacancy/{vacancyId}`

Retrieves the applications for a vacancy.

#### Response

```json
[
  {
    "id": 1,
    "studentId": 23,
    "vacancyId": 5,
    "status": "pending",
    "applicationDate": "2024-06-25",
    "comments": ""
  }
]
```
