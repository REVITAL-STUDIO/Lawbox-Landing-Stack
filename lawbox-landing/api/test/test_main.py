import pytest


def test_health_endpoint(client):
    """Test the health check endpoint."""
    response = client.get("/health")
    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert body["service"] == "lawbox-landing-api"
    assert body["version"] == "1.0"


def test_create_lead(client, cleanup_test_data):  
    """GET /orders/ should return order data when account has orders."""
    payload = {"email": 'pytest@email.com', "pain_point": "Pytest pain point", "firm_size": "solo"}
    resp = client.post("/leads", json=payload)
    assert resp.status_code == 201
    res = resp.json()
    assert "id" in res and isinstance(res["id"], int)
    res["message"] == "Lead Successfully Created!"


def test_create_lead_duplicate(client, cleanup_test_data):  
    """GET /orders/ should return order data when account has orders."""
    payload = {"email": 'pytest@email.com', "pain_point": "Pytest pain point", "firm_size": "solo"}
    resp = client.post("/leads", json=payload)
    assert resp.status_code == 201
    res = resp.json()
    assert "id" in res and isinstance(res["id"], int)
    res["message"] == "Lead Successfully Created!"
    # Trying to create duplicate
    payload = {"email": 'pytest@email.com', "pain_point": "Pytest pain point", "firm_size": "solo"}
    resp = client.post("/leads", json=payload)
    assert resp.status_code == 409




