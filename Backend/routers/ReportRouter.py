from fastapi import APIRouter
from model import CreateUserReportBody, CreateAdminReportBody
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


@router.post('/user/create', status_code=201)
async def create_user_report(createbody: CreateUserReportBody):
    report = Report(**{**createbody.model_dump(), "timestamp": datetime.now(),
                    "vote_score": 0, "report_status": "Inbox"})
    await report.insert()
    return {
        "message": "created successfully",
        "data": report
    }


@router.get('/find_all')
async def find_report():
    report = await Report.find().to_list()
    return {"message": report}


@router.post('/admin/create', status_code=201)
async def create_admin_report(createbody: CreateAdminReportBody):
    report = Report(**{**createbody.model_dump(), "timestamp": datetime.now(),
                    "vote_score": 0, "report_status": "Approved"})
    await report.insert()
    return {
        "message": "create successfully",
        "data": report
    }
