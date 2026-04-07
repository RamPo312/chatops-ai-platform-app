from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import chat, health
from app.core.config import settings

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version
)

# Simple CORS (Dev Mode)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (DEV only)
    allow_credentials=False,  # IMPORTANT: must be False with "*"
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(chat.router, prefix=settings.api_prefix)


@app.get("/")
def root():
    return {
        "message": "Welcome to ChatOps AI Platform API",
        "version": settings.app_version
    }
