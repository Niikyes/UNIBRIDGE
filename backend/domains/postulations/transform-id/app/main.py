from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router
import os
from dotenv import load_dotenv
import uvicorn

load_dotenv()

# initialize FastAPI
app = FastAPI(
    title="Transform ID Service",
    description="Microservice to transform user ID into user info",
    version="1.0.0"
)

# CORS configuration
origins = [
    "http://54.225.176.170:5173",  # local frontend
    # If you have a domain in AWS or production, add it here
    # "https://mi-app.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include the router
app.include_router(router)

if __name__ == "__main__":
    # get the port from the .env or use 5000 by default
    port = int(os.getenv("PORT", 5000))
    # use host 0.0.0.0 to allow external connections
    uvicorn.run("app.main:app", host="0.0.0.0", port=port, reload=True)
