# Microservice: Vacancy Create Service

## 🧩 Description

This microservice belongs to the **Vacancy** domain of UNIBRIDGE. Its main function is to create new vacancies on the platform, registering all relevant information such as title, description, requirements, and company relationships.

## ⚙️ Architecture style

The microservice is developed with **Sinatra (Ruby)** following a simple modular and REST structure. It separates database configuration from the main application logic.

- **app.rb**: Main entry point and route definitions.
- **config/database.rb**: Database connection configuration.

## 🗂️ Folder-level architecture

```markdown
vacancy-create-service/
├── .env
├── app.rb
├── Gemfile
├── Gemfile.lock
├── package-lock.json
├── README.md
├── swagger.yaml
├── config/
│   └── database.rb
```

## 💡 Design patterns applied

- **KISS:** Simple and straightforward code.
- **SRP:** Each file has a specific function (configuration or main logic).

## 🔗 Communication with other microservices

It does not directly communicate with other microservices. It exposes a REST endpoint to be consumed by the frontend or related services to register new vacancies.
