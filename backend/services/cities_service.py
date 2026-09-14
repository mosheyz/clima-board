from fastapi import HTTPException
import requests


def get_cities(city):
    url = "https://geocoding-api.open-meteo.com/v1/search"
    params = {"name": city, "count": 10, "language": "en", "format": "json"}
    res = requests.get(url, params=params).json()
    if not "results" in res:
        return []
    return res


def compare_cities(long1: float, lat1: float, long2: float, lat2: float):
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": [long1, long2],
        "longitude": [lat1, lat2],
        "current": [
            "temperature_2m",
            "is_day",
            "rain",
            "wind_speed_10m",
            "precipitation",
            "relative_humidity_2m",
        ],
        "daily": ["temperature_2m_min", "temperature_2m_max"],
    }
    res = requests.get(url, params=params).json()
    print(res)

    if not res:
        raise HTTPException(400, "Invalid latitude or longitude")
    return res
