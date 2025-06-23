from pydantic import BaseModel
from datetime import date
from typing import List, Optional
from uuid import UUID
 
class Vacancy(BaseModel):
    id: int
    titulo: str
    descripcion: str
    modalidad: str
    ubicacion: str
    fecha_inicio: date
    fecha_fin: date
    carreras_destino: List[str]
    habilidades: List[str]
    empresa_id: UUID
    estado: str

