from beanie import Document
import datetime
from typing import List, Optional

class Tag(Document):
    name: str

class Location(Document):
    lat: float
    lon: float


class Report(Document):
    title: str
    user: str
    tag: List[Tag]
    location: Location
    description: str
    timestamp: datetime.datetime
    priority: str
    vote_score: int
    is_approved: bool
    photo_url: Optional[str]
