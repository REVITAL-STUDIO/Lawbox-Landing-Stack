import os
import base64
import requests
from fastapi import BackgroundTasks, FastAPI, HTTPException, Request, Response, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.logger import logger as fastapi_logger
from controllers.LeadController import LeadController
from models import *
import logging
import asyncio
from db.client import PsycopgClient
from db.connect import get_db

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger("api")
logger.setLevel(logging.DEBUG)


# Ensure FastAPI's logger also shows debug logs
fastapi_logger.setLevel(logging.DEBUG)

db_client = PsycopgClient()

app = FastAPI(
    title="Lawbox Landing", 
    version="1.0", 
    description="API",
    # root_path="/v1",  # uncomment if mounted behind a gateway at /v1
)

app.logger = logger


@app.middleware("http")
async def log_event(request: Request, call_next):
    """
    Log every request
    """
    logger.info(
        "Got event method: %s, path: %s, client: %s",
        request.method,
        request.url.path,
        request.client.host,
        )
    return await call_next(request)


# TODO: auth check, init user, store db_name, user, pass in secrets service
# @app.middleware("http")
# async def init_user_info(request: Request, call_next):
#     """
#     Authorize requester. Get user info from the database and add it to the request
#     """
#     pass
#     if "Authorization" in request.headers:
#         token = request.headers["Authorization"]
#         logger.info("Got auth token: %s", token)
#     else:
#         logger.warning("No Authorization Header!")
#         return Response(status_code=401)


# For CORS
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health():
    """
    Health check endpoint.
    Returns the operational status of the API.
    """
    return HealthResponse(
        status="ok",
        service="lawbox-landing-api",
        version="1.0",
    )


@app.post("/leads", response_model=CreatedLead, status_code=201, tags=["leads"])
def create_lead(body: NewLead, db_client = Depends(get_db)) -> CreatedLead:
    """
    Create a new lead.
    Accepts email, pain point, and firm size; returns confirmation or conflict.
    """
    ctrl = LeadController(db_client, body.email)
    lead_id = ctrl.createLead(email=body.email, pain_point=body.pain_point,firm_size=body.firm_size)
    if lead_id:
        logger.info(f"Lead Created. Lead ID: {lead_id}")
        return CreatedLead(id=lead_id)
    logger.error(f"Error creating lead. Lead ID returned: {lead_id}")
    raise HTTPException(status_code=500, detail={"message": "Internal Server Error Creating Lead"})





   