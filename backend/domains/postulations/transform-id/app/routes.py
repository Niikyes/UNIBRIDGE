from fastapi import APIRouter, HTTPException
from .service import get_user_info_by_id

router = APIRouter()

@router.get("/api/transform/{user_id}")
def transform_user_id(user_id: str):
    """
    Transform user ID into full user information.
    """
    info = get_user_info_by_id(user_id)
    if not info:
        raise HTTPException(status_code=404, detail="User not found")
    return info

