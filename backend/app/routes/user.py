from fastapi import APIRouter
router = APIRouter()

# Aquí viven los endpoints
@router.get("/users")
def get_users():
    return {"message": "List of users"}