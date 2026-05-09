from pydantic import BaseModel, EmailStr

# Creamos un contrato de datos:
    # Creamos plantillas de datos
        # Cómo deberían venir los datos (validación)
        # Cómo deberían salir los datos (respuesta)


# Lo que deberá enviar el usuario si quiere crear un user en la app
class UserCreate(BaseModel):
    email: EmailStr #valida la estructura del email
    password: str


# Cuando yo responda al frontend, solo devuelvo esto
class UserResponse(BaseModel):
    id: int
    email: EmailStr
    # Puedo convertir objetos de base de datos en JSON automáticamente
    class Config:
        from_attributes = True