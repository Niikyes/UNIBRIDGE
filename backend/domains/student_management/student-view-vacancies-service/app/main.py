from fastapi import FastAPI
from app.routes import router
from app import config
import uvicorn

# Initialize FastAPI app
app = FastAPI(
    title="Student View Vacancies Service",
    description="Service for students to view available job vacancies.",
    version="1.0.0"
)

# Register router
app.include_router(router)

# Entry point
if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=int(config.PORT), reload=True)
