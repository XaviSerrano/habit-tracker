from app.core.database import SessionLocal

# Fábrica de conexiones a la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()