from fastapi import APIRouter
from model import CreateUserReportBody, CreateAdminReportBody, UpdateReportBody
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


@router.put('/update', status_code=201)
async def update_report(report_body: UpdateReportBody):
    body = report_body.model_dump()
    old_report = await Report.find_one(user=body.user, _id=body.report_id)
    old_report.priority = body.priority
    old_report.status = body.status
    await old_report.save()
    return {
        "message": f"report {old_report._id} save successfully"
    }
