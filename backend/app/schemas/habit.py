from pydantic import BaseModel

class HabitCreate(BaseModel):
    title: str
    description: str | None = None

class HabitResponse(BaseModel):
    id: int
    title: str
    description: str | None
    owner_id: int

    class Config:
        from_attributes = True