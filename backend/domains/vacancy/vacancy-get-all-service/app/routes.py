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
        rows = cur.fetchall()
        columns = [desc[0] for desc in cur.description]

        # Transformar arrays PostgreSQL (text[]) a listas
        data = []
        for row in rows:
            row_dict = dict(zip(columns, row))
            # Forzar que sean listas si no lo detecta bien
            if isinstance(row_dict["habilidades"], str):
                row_dict["habilidades"] = row_dict["habilidades"].strip('{}').split(',')
            if isinstance(row_dict["carreras_destino"], str):
                row_dict["carreras_destino"] = row_dict["carreras_destino"].strip('{}').split(',')
            data.append(row_dict)

        cur.close()
        conn.close()
        return JSONResponse(content=data)

    except Exception as e:
        print("ERROR:", str(e))
        return JSONResponse(status_code=500, content={"detail": f"Error retrieving vacancies: {str(e)}"}) 