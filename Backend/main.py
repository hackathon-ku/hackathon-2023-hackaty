from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import ReportRouter
from db import Tag, Location, Report
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from decouple import config


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
    client = AsyncIOMotorClient(config("MONGO_URL", cast=str, default="mongodb://localhost:27017"))

    await init_beanie(database=client.Hackaty, document_models=[Tag, Location, Report])

@app.get("/")
def index():
    return {"message": "Hello from Hackaty✌️"}


@app.get("/api")
def api():
    return {"message": "Hello dev from Hackaty✌️"}


@app.get("/mock")
async def mock_data():
    tag = [{'name': 'น้ำท่วม'}, {'name': 'เตือนภัย'}, {'name': 'ถนน'}, {'name': 'ความปลอดภัย'}]
    for x in tag:
        await Tag.insert(Tag(**x))
    return "ddd"

