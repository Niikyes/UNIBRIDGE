from fastapi import APIRouter
from app.db import get_db_connection
from fastapi.responses import JSONResponse

router = APIRouter()

@router.get("/api/vacancies")
def get_vacancies():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("""
            SELECT id, titulo, descripcion, habilidades, carreras_destino
            FROM vacantes
            WHERE estado = 'publicada';
        """)
        data = cur.fetchall()
        cur.close()
        conn.close()
        return JSONResponse(content=data)
    except Exception as e:
        print("ERROR:", str(e))
        return JSONResponse(status_code=500, content={"detail": f"Error retrieving vacancies: {str(e)}"})



