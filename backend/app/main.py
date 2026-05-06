from fastapi import FastAPI

from app.core.database import Base, engine

from app.models import user

from app.routes import user

app = FastAPI()

@app.get("/") #Crea url GET
def read_root():
    return {"message": "Habit Tracker API is running"} #JSON que recibe el front

Base.metadata.create_all(bind=engine)

app.include_router(user.router)