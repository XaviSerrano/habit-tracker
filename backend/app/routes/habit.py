from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import date, timedelta

from app.core.dependencies import get_db
from app.core.deps import get_current_user
from app.models.user import User
from app.models.habit import Habit
from app.models.habit_completion import HabitCompletion
from app.schemas.habit import HabitCreate, HabitResponse, HabitUpdate

from app.services.streak_service import(
    calculate_current_streak,
    calculate_best_streak
)

from app.services.habit_service import build_habit_response


router = APIRouter()


# =========================
# CREATE HABIT
# =========================
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

    return build_habit_response(new_habit, db, current_user)

# =========================
# GET HABITS
# =========================
@router.get("/habits", response_model=list[HabitResponse])
def get_habits(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    today = date.today()
    habits = db.query(Habit).filter(Habit.owner_id == current_user.id).all()
    response = []

    for habit in habits:
        today = date.today()

        completion = db.query(HabitCompletion).filter(
            HabitCompletion.habit_id == habit.id,
            HabitCompletion.user_id == current_user.id,
            HabitCompletion.completed_at == today
        ).first()

        # Calculamos streak(racha)
        all_completions = db.query(HabitCompletion).filter(
            HabitCompletion.habit_id == habit.id,
            HabitCompletion.user_id == current_user.id
        ).order_by(HabitCompletion.completed_at.desc()).all()

        # Recuperamos el servicio de rachas
        completion_dates = [
            c.completed_at
            for c in all_completions
        ]

        current_streak = calculate_current_streak(
            completion_dates
        )

        best_streak = calculate_best_streak(
            completion_dates
        )

        response.append({
            "id": habit.id,
            "title": habit.title,
            "description": habit.description,
            "owner_id": habit.owner_id,
            "completed_today": completion is not None,
            "current_streak": current_streak,
            "best_streak": best_streak
        })

    return [
        build_habit_response(habit, db, current_user)
        for habit in habits
    ]


# =========================
# UPDATE HABIT
# =========================
@router.put("/habits/{habit_id}", response_model=HabitResponse)
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
        raise HTTPException(status_code=404, detail="Habit not found")

    habit.title = habit_data.title
    habit.description = habit_data.description
    db.commit()
    db.refresh(habit)

    return build_habit_response(habit, db, current_user)

# =========================
# DELETE HABIT
# =========================
@router.delete("/habits/{habit_id}")
def delete_habit(
    habit_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    habit = db.query(Habit).filter(
        Habit.id == habit_id,
        Habit.owner_id == current_user.id
    ).first()

    if not habit:
        raise HTTPException(status_code=404, detail="Habit not found")

    db.delete(habit)
    db.commit()
    return {"message": "Habit deleted successfully"}


# =========================
# COMPLETE HABIT
# =========================
@router.post("/habits/{habit_id}/complete")
def complete_habit(
    habit_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    habit = db.query(Habit).filter(
        Habit.id == habit_id,
        Habit.owner_id == current_user.id
    ).first()

    if not habit:
        raise HTTPException(status_code=404, detail="Habit not found")

    completion = HabitCompletion(
        habit_id=habit.id,
        user_id=current_user.id,
        completed_at=date.today()  # ✅ Date puro
    )
    db.add(completion)
    db.commit()
    return {"message": "Habit marked as completed"}


# =========================
# TOGGLE HABIT
# =========================
@router.post("/habits/{habit_id}/toggle")
def toggle_habit(
    habit_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    habit = db.query(Habit).filter(
        Habit.id == habit_id,
        Habit.owner_id == current_user.id
    ).first()

    if not habit:
        raise HTTPException(status_code=404, detail="Habit not found")

    today = date.today()

    completion = db.query(HabitCompletion).filter(
        HabitCompletion.habit_id == habit_id,
        HabitCompletion.user_id == current_user.id,
        HabitCompletion.completed_at == today
    ).first()

    if completion:
        db.delete(completion)
        db.commit()
        return {"completed": False}

    new_completion = HabitCompletion(
        habit_id=habit_id,
        user_id=current_user.id,
        completed_at=today
    )
    db.add(new_completion)
    db.commit()
    return build_habit_response(habit, db, current_user)

# =========================
# HISTORY
# =========================
@router.get("/habits/history")
def get_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    completions = db.query(HabitCompletion).filter(
        HabitCompletion.user_id == current_user.id
    ).all()

    return [
        {
            "habit_id": c.habit_id,
            "date": c.completed_at.isoformat()  # ✅ Date.isoformat() = "YYYY-MM-DD"
        }
        for c in completions
    ]