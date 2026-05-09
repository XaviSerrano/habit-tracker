from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.user import UserCreate, UserResponse
from app.models.user import User
from app.core.dependencies import get_db
from app.core.security import hash_password

router = APIRouter()


# GET /users
@router.get("/users")
def get_users():
    return {"message": "List of users"}


# POST /users
@router.post("/users", response_model=UserResponse)
def create_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    new_user = User(
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user