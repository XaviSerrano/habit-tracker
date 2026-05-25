from fastapi import FastAPI

from app.core.database import Base, engine

from app.models import user

from app.routes import user

from app.models.habit import Habit

from app.routes import habit

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/") #Crea url GET
def read_root():
    return {"message": "Habit Tracker API is running"} #JSON que recibe el front

app.include_router(habit.router)

Base.metadata.create_all(bind=engine)

app.include_router(user.router)