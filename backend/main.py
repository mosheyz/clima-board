from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from middleware.logger_middleware import logger
from routers.atbash import router as atbash_router
from routers.cities import router as cities_router
from routers.favorites import router as favorites_router
from routers.forecast import router as forecast_router

app = FastAPI()


app.middleware("http")(logger)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(cities_router, prefix="/cities")
app.include_router(forecast_router, prefix="/forecast")
app.include_router(favorites_router, prefix="/favorites")
app.include_router(atbash_router, prefix="/atbash")


@app.get("/health")
def check():
    print("hello")
    return {"message": "Server works"}
