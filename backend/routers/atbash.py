from fastapi import APIRouter
from services.atbash import atbash_maker

router = APIRouter()

@router.get("/{text}")
def atbash(text: str):
    res = atbash_maker(text)
    return res
