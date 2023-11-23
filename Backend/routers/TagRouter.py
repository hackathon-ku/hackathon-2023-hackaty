from fastapi import APIRouter
from db import Tag
from datetime import datetime
from model import TagBody

router = APIRouter(
    prefix="/api/tag",
    tags=["tag"],
    responses={404: {"description": "Not found"}}
)


@router.get('/')
def landing():
    return {"message": "hello from tag"}


@router.get('/all')
async def get_tags():
    tag = await Tag.find()
    return {
        "all_tag": tag
    }


@router.post('/add')
async def add_tag(tag_body: TagBody):
    old_tag = await Tag.find_one(Tag.name == tag.name)
    if old_tag:
        return {
            "message": "tag already exists"
        }
    tag = Tag(**tag_body.model_dump())
    await tag.insert()
    return {
        "message": "tag inserted successfully",
        "tag": tag
    }
