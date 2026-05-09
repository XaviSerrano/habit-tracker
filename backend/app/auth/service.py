from app.core.security import verify_password
from app.auth.jwt import create_access_token
from app.models.user import User

def authenticate_user(db, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()

    if not user:
        return None
    
    if not verify_password(password, user.password):
        return None
    return user

def login_for_access_token(db, email: str, password: str):
    user = authenticate_user(db, email, password)

    if not user:
        return None
    token = create_access_token(data={"sub": str(user.id)})
    return token