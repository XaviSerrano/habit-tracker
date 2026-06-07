from datetime import date
from app.models.habit_completion import HabitCompletion
from app.services.streak_service import (
    calculate_current_streak,
    calculate_best_streak
)


def build_habit_response(habit, db, user):
    today = date.today()

    # ¿Está completado hoy?
    completion = db.query(HabitCompletion).filter(
        HabitCompletion.habit_id == habit.id,
        HabitCompletion.user_id == user.id,
        HabitCompletion.completed_at == today
    ).first()

    # Historial ordenado
    all_completions = db.query(HabitCompletion).filter(
        HabitCompletion.habit_id == habit.id,
        HabitCompletion.user_id == user.id
    ).order_by(HabitCompletion.completed_at.desc()).all()

    completion_dates = [c.completed_at for c in all_completions]

    return {
        "id": habit.id,
        "title": habit.title,
        "description": habit.description,
        "owner_id": habit.owner_id,
        "completed_today": completion is not None,
        "current_streak": calculate_current_streak(completion_dates),
        "best_streak": calculate_best_streak(completion_dates),
    }