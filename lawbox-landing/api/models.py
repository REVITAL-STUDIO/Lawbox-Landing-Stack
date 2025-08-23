from enum import Enum, StrEnum
from pydantic import BaseModel 
from typing import Any, Dict, List, Optional, Literal

class BasicResponse(BaseModel):
    message: Optional[str] = None


class HealthResponse(BaseModel):
    status: Literal["ok"]
    service: str
    version: str