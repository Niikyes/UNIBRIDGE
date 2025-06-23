from fastapi import APIRouter, Header, HTTPException
from services.profile_service import get_user_profile

router = APIRouter()

@router.get("/profile")
def profile(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid token header format")
    token = authorization.split(" ")[1]
    return get_user_profile(token)
