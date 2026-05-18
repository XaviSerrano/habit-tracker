from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.core.database import Base

class Habit(Base):
    __tablename__ = "habits"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)

    description = Column(String, nullable=True)

    owner_id = Column(Integer, ForeignKey("user.id"))

    owner = relationship("User", back_populates="habits")

