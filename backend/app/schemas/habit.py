from pydantic import BaseModel

# Crear hábitos
class HabitCreate(BaseModel):
    title: str
    description: str | None = None

# Editar hábitos
class HabitUpdate(BaseModel):
    title: str
    description: str

# Recoger hábitos
class HabitResponse(BaseModel):
    id: int
    title: str
    description: str | None
    owner_id: int
    completed_today: bool = False

    class Config:
        from_attributes = True
