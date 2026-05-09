from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str = "sqlite:///./habit.db"
    secret_key: str = "supersecret"
    algorithm: str = "HS256"

settings = Settings()