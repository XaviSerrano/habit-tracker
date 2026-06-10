from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base


class Habit(Base):
    __tablename__ = "habits"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    frequency = Column(String)
    
    owner_id = Column(
        Integer,
        ForeignKey("user.id")
    )

    user = relationship("User", back_populates="habits")

    completions = relationship(
        "HabitCompletion",
        backref="habit",
        cascade="all, delete-orphan"
    )