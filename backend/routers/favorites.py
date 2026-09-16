from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.favorites_service import add_city, get_favorites, remove_city


class AddCity(BaseModel):
    name: str
    city: str
    longitude: float
    latitude: float

router = APIRouter()

@router.post("")
def add_to_favorites(city: AddCity):
    result = add_city(city.model_dump())
    if not result:
        raise HTTPException(400, "Cannot add")
    return result


@router.delete("")
def delete_city(name:str, longitude: float, latitude: float):
    result = remove_city(name, longitude, latitude)
    if not result:
        raise HTTPException(404, "Not found")
    return result

@router.get("/{name}")
def get_all_favorites(name: str):
    result = get_favorites(name)
    if not result:
        raise HTTPException(404, "Not found")
    return result
