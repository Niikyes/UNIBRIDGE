from fastapi import FastAPI
from app.routes import router
from app import config
import uvicorn

app = FastAPI(
    title="Vacancy Get All Service",
    description="API to retrieve all active job vacancies",
    version="1.0.0"
)

# Register routes
app.include_router(router)

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=int(config.PORT), reload=True)
