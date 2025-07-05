from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router
import os
from dotenv import load_dotenv
import uvicorn

load_dotenv()

# Inicializamos FastAPI
app = FastAPI(
    title="Transform ID Service",
    description="Microservice to transform user ID into user info",
    version="1.0.0"
)

# Configuración de CORS
origins = [
    "http://localhost:5173",  # tu frontend local
    # Si en el futuro tienes dominio en AWS o producción, lo agregas aquí
    # "https://mi-app.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluimos el router
app.include_router(router)

if __name__ == "__main__":
    # Obtenemos el puerto del .env o usamos 5000 por defecto
    port = int(os.getenv("PORT", 5000))
    # Usamos host 0.0.0.0 para permitir conexiones externas
    uvicorn.run("app.main:app", host="0.0.0.0", port=port, reload=True)
