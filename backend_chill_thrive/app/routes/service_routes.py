from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.service import Service
from app.schemas.service import ServiceCreate

router = APIRouter()

@router.post("/")
def create_service(service: ServiceCreate, db: Session = Depends(get_db)):
    new_service = Service(**service.dict())
    db.add(new_service)
    db.commit()
    return new_service

