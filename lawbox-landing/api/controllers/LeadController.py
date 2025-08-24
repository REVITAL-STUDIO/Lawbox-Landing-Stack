import logging
from typing import List

from psycopg2.errors import DatabaseError, UniqueViolation

from fastapi import HTTPException
import api.db.lead as db
from api.db.client import PsycopgClient

logger = logging.getLogger()


class LeadController:
    db_client: PsycopgClient
    lead_id: int
    email: str


    def __init__(self, db_client: PsycopgClient, email: str) -> None:
            self.db_client = db_client
            self.email = email


    def createLead(self, email: str, pain_point, firm_size):
        logger.info(f"Creating lead. Email: {email}")
        try:
            return db.create_lead(
                db=self.db_client,
                email=email,
                pain_point= pain_point,
                firm_size= firm_size
            )
        except UniqueViolation:
            logger.warning("Duplicate lead email: %s", email)
            raise HTTPException(status_code=409, detail={"message": "Lead already exists"})
        except DatabaseError as e:
            logger.error("Database Error creating lead:\n%s", e)
            raise HTTPException(status_code=500, detail={"message": "DB Error Creating Lead"})
