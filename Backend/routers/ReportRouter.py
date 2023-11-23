from fastapi import APIRouter, HTTPException
from model import CreateUserReportBody, CreateAdminReportBody, UpdateReportBody, UpdateReportVoteBody
from db import Report, Tag
from datetime import datetime
from utils import calculate_distance_linear
from typing import Optional

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
    for tag in report.tags:
        if not await Tag.find_one(Tag.name==tag.name):
            new_tag = Tag(name=tag.name)
            await new_tag.insert()
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
    report = await Report.find(Report.report_status == "Approved").to_list()
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
        raise HTTPException(f"Report id: {body['report_id']}  not found")
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

async def find_report(lat, lon):
    lst = []
    for report in await Report.find(Report.report_status=="Approved").to_list():
        distance = calculate_distance_linear(lat, lon, report.lat, report.lon)
        lst.append({**report.model_dump(), "distance": distance})

    return lst


@router.get('/get_alert/{last_report_timestamp}/{lat}/{lon}')
async def get_alert(last_report_timestamp: Optional[str], lat, lon):
    if len(last_report_timestamp) <= 2:
        lst = await find_report(lat, lon)
    else:
        lst = []
        if isinstance(last_report_timestamp, str) and last_report_timestamp != '':
            last_report_timestamp = datetime.fromisoformat(last_report_timestamp[:-6])
        last_reported = last_report_timestamp
        all_report = await Report.find(Report.report_status=="Approved").to_list()

        for report in all_report:
            if report.last_report_time is None:
                continue
            if isinstance(last_reported, str) and last_reported != '':
                last_reported = datetime.fromisoformat(last_reported[:-6])
            distance = calculate_distance_linear(lat, lon, report.lat, report.lon)
            if report.last_report_time > last_report_timestamp:
                lst.append({**report.model_dump(), "distance": distance})
                if report.last_report_time > last_reported:
                    last_reported = report.last_report_time
    return {
        "message": "success",
        "report": lst,
        "last_report_timestamp": max(report['last_report_time'] or datetime(0, 0, 0, 0, 0, 0, 0) for report in lst)
    }

