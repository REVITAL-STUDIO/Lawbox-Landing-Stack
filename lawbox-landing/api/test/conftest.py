import pytest
from fastapi.testclient import TestClient
from api.main import app   

@pytest.fixture
def client():
    """Fixture that provides a TestClient for the FastAPI app."""
    with TestClient(app) as c:
        yield c