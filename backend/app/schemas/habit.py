from pydantic import BaseModel

# Crear hábitos
class HabitCreate(BaseModel):
    title: str
    description: str | None = None
    frequency: str = "daily"

# Editar hábitos
class HabitUpdate(BaseModel):
    title: str
    description: str | None = None
    frequency: str

# Recoger hábitos
class HabitResponse(BaseModel):
    id: int
    title: str
    description: str | None

    frequency: str

    owner_id: int
    completed_today: bool = False
    current_streak: int
    best_streak: int
    
    class Config:
        from_attributes = True
