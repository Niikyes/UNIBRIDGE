# Domain: Vacancy

## 📄 General description

The **Vacancy** domain is responsible for managing vacancies within UNIBRIDGE. It includes microservices that allow creating new vacancies and querying all available vacancies on the platform.

This domain helps companies and administrators manage the opportunities offered to students.

## 🧩 Included microservices

- **vacancy-create-service**: Allows companies or administrators to create new vacancies in the system.
- **vacancy-get-all-service**: Allows fetching and listing all registered vacancies on the platform.

## ⚙️ Technologies used

- Ruby (Sinatra) (vacancy-create-service)
- Python (FastAPI) (vacancy-get-all-service)
- PostgreSQL
- Docker

## 🌐 Reference ports

5007, 5008 (depending on the microservice)

## 🗂️ Suggested structure

```markdown
vacancy/
├── vacancy-create-service/
├── vacancy-get-all-service/
```

## 🚀 Expected use

This domain is mainly integrated with the student management domain and the frontend, so students can view and apply to available vacancies.
