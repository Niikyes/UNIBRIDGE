# Transform ID Service

Microservice to transform a user ID into detailed user information.

## Stack

- Python
- FastAPI
- PostgreSQL
- N-Capas architecture (Controller, Service, DB)
- KISS & DRY principles

## How to run

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload --port 5006
