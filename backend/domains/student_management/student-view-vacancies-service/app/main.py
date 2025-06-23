from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router
from app import config
import uvicorn

# Initialize FastAPI app
app = FastAPI(
    title="Student View Vacancies Service",
    description="Service for students to view available job vacancies.",
    version="1.0.0"
)

# ✅ Habilitar CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Solo tu frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register router
app.include_router(router)

# Entry point
if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=int(config.PORT), reload=True)
