from pydantic import BaseModel

# Crear hábitos
class HabitCreate(BaseModel):
    title: str
    description: str | None = None

# Editar hábitos
class HabitUpdate(BaseModel):
    title: str
    description: str | None = None

# Recoger hábitos
class HabitResponse(BaseModel):
    id: int
    title: str
    description: str | None
    owner_id: int
    completed_today: bool = False
    streak: int = 0
    
    class Config:
        from_attributes = True
