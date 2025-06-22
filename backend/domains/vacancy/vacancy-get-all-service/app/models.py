from pydantic import BaseModel
from datetime import date
from typing import Optional

# Vacancy represents the structure of a job opening
class Vacancy(BaseModel):
    id: int
    titulo: str
    descripcion: str
    empresa_id: int
    ciudad: str
    carrera: str
    estado: str
    fecha_publicacion: Optional[date]
