from fastapi import APIRouter, HTTPException
from app.db import get_connection
from app.models import Vacancy

router = APIRouter()

@router.get("/api/vacancies", response_model=list[Vacancy])
def get_all_vacancies():
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT id, titulo, descripcion, empresa_id, ciudad, carrera, estado, fecha_publicacion
            FROM vacantes
            WHERE estado = 'activa'
        """)
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return rows
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving vacancies: {str(e)}")
