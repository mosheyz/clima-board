from fastapi import APIRouter
from services.cities_service import get_cities, compare_cities

router = APIRouter()

@router.get("/compare")
def compare_sities(long1: float, lat1: float, long2: float, lat2: float):
    result = compare_cities(long1, lat1, long2, lat2)
    return result

@router.get("/{name}")
def get_all_cities(name):
    result = get_cities(name)
    return result["results"]
