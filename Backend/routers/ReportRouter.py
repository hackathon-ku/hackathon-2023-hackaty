from fastapi import APIRouter

router = APIRouter(
    prefix="/api/report",
    tags=["record"],
    responses={404: {"description": "Not found"}}
    )


@router.get('/')
def landing():
    return {"message": "hello"}
