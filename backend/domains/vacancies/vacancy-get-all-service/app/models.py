from pydantic import BaseModel
from typing import List

# Pydantic model for a vacancy document
class VacancyModel(BaseModel):
    title: str
    description: str
    start_date: str
    careers: List[str]
    company_id: str
