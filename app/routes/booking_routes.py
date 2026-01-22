from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.booking import Booking
from app.core.auth import get_current_user
router = APIRouter()

@router.post("/")
def create_booking(
    service_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    booking = Booking(
        user_id=current_user.id,
        service_id=service_id
    )
    db.add(booking)
    db.commit()
    db.refresh(booking)
    return booking