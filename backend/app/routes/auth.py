from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestFrom
from sqlAlchemy.orm import Session

from app.core.database import get_db
from app.auth.service import login_for_access_token

router = APIRouter()

@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    token = login_for_access_token(db, form_data.username, form_data.password)

    if not token:
        return {"error": "Invalid credentials"}

    return {"access_token": token, "token_type": "bearer"}