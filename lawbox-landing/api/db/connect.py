import os
import logging
from db.client import PsycopgClient
log = logging.getLogger("dbtx")

def get_db():
    db_client = PsycopgClient()
    db_client.connect(
        os.environ["DB_NAME"],
        os.environ["DB_USER"],
        os.environ["DB_PASSWORD"],
        os.environ["HOST"],
        os.environ["PORT"],
    )
    try:
        yield db_client
        log.debug("TX commit()")
        db_client.commit()  # commit on success
    except Exception as e:
        log.error("TX rollback() due to: %r", e)
        db_client.rollback() # rollback on error
        raise
    finally:
        db_client.close()