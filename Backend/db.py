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
    tags: List[Tag]
    location: Location
    description: str
    timestamp: datetime.datetime
    priority: Optional[str] = "LOW"
    vote_score: int
    report_status: Optional[str] = "INBOX"
    photo_url: Optional[str] = None
