from fastapi import APIRouter, HTTPException
from model import CreateUserReportBody, CreateAdminReportBody, UpdateReportBody, UpdateReportVoteBody
from db import Report
from datetime import datetime
from utils import calculate_distance_linear, is_later_than
import pytz

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
    # if calculate_distance_linear(13.850679, 100.573696, report.lat, report.lon) < 4:
    #     raise HTTPException("Cant pin outside campus")
    await report.insert()
    return {
        "message": "created successfully",
        "data": report
    }


@router.get('/find_all')
async def find_report():
    report = await Report.find().to_list()
    return {"message": report}


@router.get('/user/find_all')
async def find_user_report():
    report = await Report.find(Report.report_status == "Approve").to_list()
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
    old_report = await Report.get(body['report_id'])
    if not old_report:
        return HTTPException(f"Report id: {body['report_id']}  not found")
    old_report.priority = body['priority']
    old_report.report_status = body['report_status']
    old_report.last_report_time = datetime.now()
    await old_report.save()
    return {
        "message": f"report {body['report_id']} save successfully"
    }


@router.put('/update_vote_score', status_code=201)
async def update_vote_score(report_body: UpdateReportVoteBody):
    body = report_body.model_dump()
    report = await Report.get(body['report_id'])
    if body['isUp']:
        report.vote_score += 1
    else:
        report.vote_score -= 1
    await report.save()
    return {
        "message": f"report {body['report_id']} save successfully"
    }


@router.get('/get_alert/{last_report_timestamp}/{lat}/{lon}')
async def get_alert(last_report_timestamp, lat, lon):
    lst = []
    last_reported = last_report_timestamp
    all_report = await Report.find().to_list()

    for report in all_report:
        if report.last_report_time is None:
            continue

            # Convert report.last_report_time to the appropriate datetime format if necessary
        report_last_time = report.last_report_time
        if isinstance(report_last_time, str):
            report_last_time = datetime.fromisoformat(
                report_last_time).replace(tzinfo=pytz.UTC)
        distance = calculate_distance_linear(lat, lon, report.lat, report.lon)
        # if distance < 4
        if is_later_than(report.last_report_time, last_report_timestamp):
            report_dict = report if isinstance(report, dict) else report.model_dump()
            lst.append({**report_dict, "distance": distance})
            if is_later_than(report.last_report_time, last_reported):
                last_reported = report.last_report_time
    return {
        "message": "success",
        "report": lst,
        "last_report_timestamp": last_reported
    }

