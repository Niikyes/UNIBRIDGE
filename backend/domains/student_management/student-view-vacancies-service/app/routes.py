from fastapi import APIRouter, HTTPException
import httpx
from app import config

router = APIRouter()

@router.get("/api/student/vacancies")
async def get_vacancies_for_student():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(config.VACANCY_SERVICE_URL)
            response.raise_for_status()
            return response.json()
    except httpx.RequestError as e:
        raise HTTPException(status_code=500, detail=f"Connection error: {str(e)}")
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=response.status_code, detail=f"Service error: {str(e)}")
