from pydantic import BaseModel

class ServiceOut(BaseModel):
    id: int
    title: str
    price: int
