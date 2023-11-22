from fastapi import APIRouter
from model import CreateReportBody
from db import Report
from datetime import datetime

router = APIRouter(
    prefix="/api/report",
    tags=["record"],
    responses={404: {"description": "Not found"}}
    )


@router.get('/')
def landing():
    return {"message": "hello"}


@router.post('/create', status_code=201)
async def create_report(createbody: CreateReportBody):
    report = Report(**{**createbody.model_dump(), "timestamp": datetime.now(), "vote_score": 0, "is_approved": False})
    await report.insert()
    return {
        "message": "created successfully",
        "data": report
    }


@router.get('/find_all')
async def find_report():
    report = await Report.find().to_list()
    return {"message": report}