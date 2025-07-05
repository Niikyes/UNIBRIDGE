from fastapi import APIRouter
from app.db import get_db_connection
from fastapi.responses import JSONResponse
from uuid import UUID

router = APIRouter()

@router.get("/api/vacancies")
def get_vacancies():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("""
            SELECT id, titulo, descripcion, habilidades, carreras_destino, modalidad, ubicacion, estado
            FROM vacantes
            WHERE estado = 'publicada';
        """)
        rows = cur.fetchall()

        data = []
        for row_dict in rows:
            if isinstance(row_dict["habilidades"], str):
                row_dict["habilidades"] = row_dict["habilidades"].strip('{}').split(',')
            if isinstance(row_dict["carreras_destino"], str):
                row_dict["carreras_destino"] = row_dict["carreras_destino"].strip('{}').split(',')
            data.append(row_dict)

        cur.close()
        conn.close()

        print("Vacantes reales:", data)
        return JSONResponse(content=data)

    except Exception as e:
        print("ERROR:", str(e))
        return JSONResponse(status_code=500, content={"detail": f"Error retrieving vacancies: {str(e)}"})

@router.get("/api/vacancies/empresa/{empresa_id}")
def get_vacancies_by_company(empresa_id: UUID):
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("""
            SELECT id, titulo, descripcion, habilidades, carreras_destino, modalidad, ubicacion, estado
            FROM vacantes
            WHERE estado = 'publicada' AND empresa_id = %s;
        """, (str(empresa_id),))
        rows = cur.fetchall()

        data = []
        for row_dict in rows:
            if isinstance(row_dict["habilidades"], str):
                row_dict["habilidades"] = row_dict["habilidades"].strip('{}').split(',')
            if isinstance(row_dict["carreras_destino"], str):
                row_dict["carreras_destino"] = row_dict["carreras_destino"].strip('{}').split(',')
            data.append(row_dict)

        cur.close()
        conn.close()

        print(f"Vacantes para empresa {empresa_id}:", data)
        return JSONResponse(content=data)

    except Exception as e:
        print("ERROR:", str(e))
        return JSONResponse(status_code=500, content={"detail": f"Error retrieving company vacancies: {str(e)}"})


