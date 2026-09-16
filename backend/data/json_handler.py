import json

FILE_NAME = "./data/favorites.json"


def read_from_json():
    try:
        with open(FILE_NAME, "r", encoding="utf-8") as f:
            data = json.load(f)
            return data
    except (FileNotFoundError, json.JSONDecodeError):
        write_to_json({})
        return {}


def write_to_json(data: list):
    with open(FILE_NAME, "w") as f:
        json.dump(data, f)
