from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.routing import APIRoute
from graphql import graphql_sync
from graphql.type import GraphQLSchema
from graphene import Schema
from app.graphql_schema import schema as graphene_schema

# Create FastAPI app
app = FastAPI(
    title="Vacancy Get All Service",
    description="Microservice to retrieve all available internship vacancies using GraphQL and MongoDB.",
    version="1.0.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/ping")
def ping():
    return {"message": "pong"}

# Custom GraphQL POST handler
@app.post("/graphql")
async def graphql_post(request: Request):
    body = await request.json()
    query = body.get("query")
    result = graphql_sync(
        graphene_schema.graphql_schema,
        source=query
    )
    response = {}
    if result.errors:
        response["errors"] = [str(error) for error in result.errors]
        if result.data:
            response["data"] = result.data
    return JSONResponse(response)

