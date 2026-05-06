from sqlalchemy import Column, Integer, String
from app.core.database import Base

# Definimos las tablas de la base de datos
class User(Base):
    __tablename__="users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)