from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.graphql import GraphQLApp

from app.graphql_schema import schema

# Create FastAPI app
app = FastAPI(
    title="Vacancy Get All Service",
    description="Microservice to retrieve all available internship vacancies using GraphQL and MongoDB.",
    version="1.0.0"
)

# Enable CORS to allow frontend to interact
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace * with specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# GraphQL endpoint mounted
app.add_route("/graphql", GraphQLApp(schema=schema))

# Health check endpoint
@app.get("/ping")
def ping():
    return {"message": "pong"}
