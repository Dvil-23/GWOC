'''from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import user_routes, service_routes, booking_routes
from app.core.database import engine, Base
from app.models import user, service, booking

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Chill Thrive API is running 🚀"}

app.include_router(user_routes.router, prefix="/users", tags=["Users"])
app.include_router(service_routes.router, prefix="/services", tags=["Services"])
app.include_router(booking_routes.router, prefix="/bookings", tags=["Bookings"])'''

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import user_routes, service_routes, booking_routes
from app.routes import auth_routes
from app.core.database import engine, Base
from app.models import user, service, booking

app = FastAPI()

# include all routers
app.include_router(auth_routes.router, prefix="/api/auth", tags=["Auth"])
app.include_router(user_routes.router, prefix="/api/users", tags=["Users"])
app.include_router(service_routes.router, prefix="/api/services", tags=["Services"])
app.include_router(booking_routes.router, prefix="/api/bookings", tags=["Bookings"])

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
                   "http://127.0.0.1:3000"
                   ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Chill Thrive API is running 🚀"}



