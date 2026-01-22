'''from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from passlib.context import CryptContext
from app.core.database import get_db
from app.models.user import User
from app.core.security import create_access_token

router = APIRouter()
pwd_context = CryptContext(schemes=["argon2"], deprecated="auto")

def verify_password(plain, hashed):
    return pwd_context.verify(plain, hashed)
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

@router.post("/signup")
def signup(data: dict, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == data["email"]).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        name=data["name"],
        email=data["email"],
        hashed_password=hash_password(data["password"])
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return {"message": "User created successfully"}


@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": str(user.id)})
    return {"access_token": token, "token_type": "bearer"}'''


from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from pydantic import BaseModel

from app.core.database import get_db
from app.models.user import User

router = APIRouter()
pwd_context = CryptContext(schemes=["argon2"], deprecated="auto")

# Pydantic model for request body
class SignupRequest(BaseModel):
    name: str
    email: str
    password: str

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

@router.post("/signup")
def signup(data: SignupRequest, db: Session = Depends(get_db)):
    # Check if email already exists
    existing = db.query(User).filter(User.email == data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Create new user
    user = User(
        name=data.name,
        email=data.email,
        hashed_password=hash_password(data.password)
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    return {"message": "Signup successful", "user_id": user.id}