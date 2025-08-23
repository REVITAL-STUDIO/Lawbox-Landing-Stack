from enum import Enum, StrEnum
from pydantic import BaseModel
from typing import Any, Dict, List, Optional

class BasicResponse(BaseModel):
    message: Optional[str] = None
