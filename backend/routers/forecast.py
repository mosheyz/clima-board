from fastapi import APIRouter
from services.forecast_service import get_forecast, get_weekly_forecast


router = APIRouter()


@router.get("")
def get_current_weather(longitude: float, latitude: float):
    result = get_forecast(longitude, latitude)
    return result

@router.get("/weekly")
def get_weekly_weather(longitude: float, latitude: float):
    result = get_weekly_forecast(longitude, latitude)
    return result