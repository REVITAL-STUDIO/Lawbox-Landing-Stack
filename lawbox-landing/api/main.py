import base64
import requests
from fastapi import BackgroundTasks, FastAPI, HTTPException, Request, Response, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.logger import logger as fastapi_logger

from models import *
import logging
import asyncio


# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger("api")
logger.setLevel(logging.DEBUG)


# Ensure FastAPI's logger also shows debug logs
fastapi_logger.setLevel(logging.DEBUG)


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

