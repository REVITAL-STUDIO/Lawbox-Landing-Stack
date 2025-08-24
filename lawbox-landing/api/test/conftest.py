import pytest
from fastapi.testclient import TestClient
from api.main import app
import psycopg2
import os

@pytest.fixture
def client():
    """Fixture that provides a TestClient for the FastAPI app."""
    with TestClient(app) as c:
        yield c


@pytest.fixture()
def db_conn():
    """Direct psycopg2 connection for assertions/cleanup inside tests."""
    conn = psycopg2.connect(
        dbname= os.environ["DB_NAME"], user= os.environ["DB_USER"], password=os.environ["DB_PASSWORD"], host=os.environ["DB_HOST"], port= os.environ["DB_PORT"]
    )
    yield conn
    conn.close()


@pytest.fixture
def cleanup_test_data(db_conn):
    """Clean up db after test."""
    yield
    try:
        with db_conn:
            with db_conn.cursor() as cursor:
                cursor.execute("DELETE FROM lawbox.leads")
    except Exception as e:
        print(f"Cleanup failed: {e}")
