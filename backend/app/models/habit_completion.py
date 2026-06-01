from sqlalchemy import Column, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base


class HabitCompletion(Base):
    __tablename__ = "habit_completions"

    id = Column(Integer, primary_key=True, index=True)

    habit_id = Column(
        Integer,
        ForeignKey("habits.id", ondelete="CASCADE"),
        nullable=False
    )

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    completed_at = Column(DateTime, nullable=False)