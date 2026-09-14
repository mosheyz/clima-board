import requests
from fastapi import HTTPException


def get_forecast(longitude, latitude):
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": latitude,
        "longitude": longitude,
        "current": [
            "temperature_2m",
            "is_day",
            "rain",
            "wind_speed_10m",
            "precipitation",
            "relative_humidity_2m",
            "weather_code"
        ],
        "daily": ["temperature_2m_min", "temperature_2m_max"],
    }
    res = requests.get(url, params=params).json()

    if not res:
        raise HTTPException("Invalid latitude or longitude")
    return res


def get_weekly_forecast(longitude, latitude):
    res = get_forecast(longitude, latitude)
    if not res:
        raise HTTPException("Invalid latitude or longitude")
    weekly = res["daily"]
    return weekly


