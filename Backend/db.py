from beanie import Document
import datetime
from typing import List, Optional

class Tag(Document):
    name: str


class Report(Document):
    title: str
    user: str
    description: str
    tags: List[Tag]
    lat: float
    lon: float
    timestamp: datetime.datetime
    last_report_time: Optional[datetime.datetime] = None
    priority: Optional[str] = "Low"
    vote_score: int
    report_status: Optional[str] = "Inbox"
    photo_url: Optional[str] = None
