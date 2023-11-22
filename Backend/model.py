from pydantic import BaseModel
from typing import List, Optional


class TagBody(BaseModel):
    name: str

class LocationBody(BaseModel):
    lat: float
    lon: float


class CreateUserReportBody(BaseModel):
    title: str
    user: str
    tags: List[TagBody]
    location: LocationBody
    description: str
    priority: Optional[str] = None
    photo_url: Optional[str] = None


class CreateAdminReportBody(BaseModel):
    title: str
    user: str
    tags: List[TagBody]
    location: LocationBody
    description: str
    priority: Optional[str] = None
    report_status: Optional[str] = "Approved"
    photo_url: Optional[str] = None


class UpdateReportBody(BaseModel):
    user: str
    report_id: str
    report_status: Optional[str] = None
    priority: Optional[str] = None

    class Config:
        arbitrary_types_allowed = True


class UpdateReportVoteBody(BaseModel):
    user: str
    report_id: str
    vote_score: str