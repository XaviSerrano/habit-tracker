from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.core.deps import get_current_user

from app.models.user import User
from app.models.habit import Habit

from app.schemas.habit import HabitCreate, HabitResponse, HabitUpdate

router = APIRouter()


@router.post("/habits", response_model=HabitResponse)
def create_habit(
    habit: HabitCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    new_habit = Habit(
        title=habit.title,
        description=habit.description,
        owner_id=current_user.id
    )

    db.add(new_habit)
    db.commit()
    db.refresh(new_habit)

    return new_habit

@router.get("/habits", response_model=list[HabitResponse])
def get_habits(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    habits = db.query(Habit).filter(
        Habit.owner_id == current_user.id
    ).all()

    return habits

@router.put("/habits/{id}", response_model=HabitUpdate)
def update_habit(
    habit_id: int,
    habit_data: HabitUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    habit = db.query(Habit).filter(
        Habit.id == habit_id,
        Habit.owner_id == current_user.id
    ).first()

    if not habit:
        raise HTTPException(
            status_code=404,
            detail="Habit not found"
        )
    
    habit.title = habit_data.title
    habit.description = habit_data.description

    db.commit()
    db.refresh(habit)

    return habit