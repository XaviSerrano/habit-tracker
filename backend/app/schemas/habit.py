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

    class Config:
        from_attributes = True
