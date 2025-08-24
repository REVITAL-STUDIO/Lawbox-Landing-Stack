import psycopg2
from typing import Optional


class PsycopgClient:
    """
    Wrapper around a psycopg2 connection.
    - One connection per request (provided by a FastAPI dependency).
    - Short-lived cursors: call `cursor()` inside each DB function.
    """

    def __init__(self) -> None:
        self.conn: Optional[psycopg2.extensions.connection] = None

    def connect(self, dbname: str, user: str, password: str, host: str, port:str ) -> None:
        self.conn = psycopg2.connect(
            dbname=dbname,
            user=user,
            password=password,
            host=host,
            port=int(port),
        )

    def cursor(self):
        if self.conn is None:
            raise RuntimeError("DB connection has not been established.")
        return self.conn.cursor()

    # Transaction helpers
    def commit(self) -> None:
        if self.conn:
            self.conn.commit()

    def rollback(self) -> None:
        if self.conn:
            self.conn.rollback()

    # Close connection
    def close(self) -> None:
        if self.conn:
            try:
                self.conn.close()
            finally:
                self.conn = None
