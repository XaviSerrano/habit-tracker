from sqlalchemy import Column, Integer, String
from app.core.database import Base

from sqlalchemy.orm import relationship

# Definimos las tablas de la base de datos
class User(Base):
    __tablename__="user"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

    # Creamos la relación con habits
    habits = relationship("Habit", back_populates="owner")
