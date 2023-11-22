import datetime

from pydantic import BaseModel
from typing import List, Optional


class TagBody(BaseModel):
    name: str

class LocationBody(BaseModel):
    lat: float
    lon: float


class CreateReportBody(BaseModel):
    title: str
    user: str
    tag: List[TagBody]
    location: LocationBody
    description: str
    priority: Optional[str]
    photo_url: Optional[str]

