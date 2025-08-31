import logging
from psycopg2 import sql
from psycopg2 import DatabaseError
from db.client import PsycopgClient
from typing import Optional
logger = logging.getLogger()




def create_lead(db: PsycopgClient, email: str, pain_point: Optional[str], firm_size: Optional[str]) -> int:
    """
    Insert a lead and return its new id.
    Expects a unique constraint on (email) at the DB level.
    """
    with db.cursor() as cursor:
        cursor.execute(
            sql.SQL(
                """
                INSERT INTO lawbox.leads (email, pain_point_text, firm_size)
                VALUES (%s, %s, %s)
                RETURNING lead_id
                """
            ),
            (email, pain_point, firm_size),
        )
        return cursor.fetchone()[0]