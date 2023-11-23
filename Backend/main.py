from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import ReportRouter
from db import Tag, Report
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from decouple import config
import certifi

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ReportRouter.router)

 
@app.on_event('startup')
async def connect_db():
    client = AsyncIOMotorClient(
        config("MONGO_URL", cast=str, default="mongodb://localhost:27017"), tlsCAFile=certifi.where())

    await init_beanie(database=client.Hackaty, document_models=[Tag, Report])


@app.get("/")
def index():
    return {"message": "Hello from Hackaty✌️"}


@app.get("/api")
def api():
    return {"message": "Hello dev from Hackaty✌️"}


@app.get("/mock")
async def mock_data():
    tags = [{'name': 'น้ำท่วม'}, {'name': 'เตือนภัย'},
            {'name': 'ถนน'}, {'name': 'ความปลอดภัย'}, {"name": "จราจร"}, {"name": "รถ"}, {"name": "อากาศ"}, {"name": "ประกาศสาธารณะ"}]
    for x in tags:
        await Tag.insert(Tag(**x))

    report = [{"title": "น้ำท่วม", "user": "user1",
              "tags": [{'name': 'น้ำท่วม'}, {'name': 'เตือนภัย'}],
               "lat": 42.941033134628,
               "lon":  153.794558983582,
               "description": "ช่วยด้วยย",
               "timestamp": '2023-11-22 11:49:10.833520',
               "priority": 'Low',
               "report_status": "Inbox",
               "vote_score": 12
               },
              {
        "title": "จราจรติดขัด",
        "user": "user8",
        "description": "สถานการณ์ฉุกเฉิน",
        "tags": [{"name": "จราจร"}, {"name": "รถ"}, {"name": "ถนน"}],
        "lat": 0.40655489680072776,
        "lon": -90.67725247511402,
        "timestamp": "2022-12-21T04:17:25",
        "last_report_time": "2023-02-03T09:24:37",
        "report_status": "อนุมัติ",
        "priority": "ปานกลาง",
        "vote_score": 8,
        "photo_url": "http://example.com/photo.jpg"
    },
        {
        "title": "น้ำท่วม",
        "user": "user1",
        "description": "แจ้งเหตุการณ์",
        "tags": [{"name": "จราจร"}],
        "lat": 20.218605715670236,
        "lon": -123.37097886147902,
        "timestamp": "2023-04-07T06:58:42",
        "last_report_time": "2020-04-02T22:31:03",
        "report_status": "ในกล่องข้อความ",
        "priority": "ปานกลาง",
        "vote_score": 75,
        "photo_url": "http://example.com/photo.jpg"
    },
        {
        "title": "จราจรติดขัด",
        "user": "user7",
        "description": "สถานการณ์ฉุกเฉิน",
        "tags": [{"name": "อากาศ"}],
        "lat": 23.09934727739281,
        "lon": -102.87502756715566,
        "timestamp": "2023-01-10T03:57:04",
        "last_report_time": "2020-11-17T17:44:50",
        "report_status": "เก็บถาวร",
        "priority": "ปานกลาง",
        "vote_score": 93,
        "photo_url": None
    },
        {
        "title": "น้ำท่วม",
        "user": "user7",
        "description": "สถานการณ์ฉุกเฉิน",
        "tags": [{"name": "ประกาศสาธารณะ"}],
        "lat": -27.504941044871096,
        "lon": -98.41560166454676,
        "timestamp": "2020-04-18T17:11:32",
        "last_report_time": "2020-07-03T12:31:25",
        "report_status": "เก็บถาวร",
        "priority": "ปานกลาง",
        "vote_score": 29,
        "photo_url": None
    },
        {
        "title": "จราจรติดขัด",
        "user": "user8",
        "description": "สถานการณ์ฉุกเฉิน",
        "tags": [{"name": "อากาศ"}],
        "lat": 37.97862751084645,
        "lon": -157.66837766087005,
        "timestamp": "2020-10-13T13:44:20",
        "last_report_time": "2021-11-13T14:58:53",
        "report_status": "เก็บถาวร",
        "priority": "ปานกลาง",
        "vote_score": 47,
        "photo_url": None
    }
    ]
    for y in report:
        await Report.insert(Report(**y))
    return {"message": "Mock data successfully"}
