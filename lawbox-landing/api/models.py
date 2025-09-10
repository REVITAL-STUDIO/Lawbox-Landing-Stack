from enum import Enum, StrEnum
from pydantic import BaseModel, EmailStr  # pylint: disable=no-name-in-module
from typing import Any, Dict, List, Optional, Literal


class BasicResponse(BaseModel):
    message: Optional[str] = None


class HealthResponse(BaseModel):
    status: Literal["ok"]
    service: str
    version: str


class FirmSize(StrEnum):
    SOLO = "solo"  # 1
    SMALL = "small"  # 2–10
    MEDIUM = "medium"  # 11–50
    LARGE = "large"  # 51–250


class NewLead(BaseModel):
    email: EmailStr
    pain_point: Optional[str] = None
    firm_size: Optional[FirmSize] = None


class CreatedLead(BaseModel):
    id: int
    message: str = "Lead Successfully Created!"
