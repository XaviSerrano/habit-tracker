from sqlalchemy import Column, Integer, DateTime, ForeignKey
from datetime import datetime

from app.core.database import Base

class HabitCompletion(Base):
    __tablename__ = "habit_completions"

    id = Column(Integer, primary_key=True, index=True)

    habit_id = Column(Integer, ForeignKey("habits.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)

    completed_at = Column(DateTime, default=datetime.utcnow)