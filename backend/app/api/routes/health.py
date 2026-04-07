from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/health")
def health():
    return {"status": "healthy"}


@router.get("/ready")
def ready():
    return {"status": "ready"}


@router.get("/live")
def live():
    return {"status": "alive"}
