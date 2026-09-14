from data.json_handler import read_from_json, write_to_json


def get_favorites(name):
    data = read_from_json()
    return data[name]


def add_city(city):
    data = read_from_json()
    if city["name"] not in data:
        data[city["name"]] = []
    data[city["name"]].append(
        {
            "city": city["city"],
            "longitude": city["longitude"],
            "latitude": city["latitude"],
        }
    )
    write_to_json(data)
    return True


def remove_city(name, long, lat):
    data = read_from_json()
    for c in data[name]:
        if c["longitude"] == long and c["latitude"] == lat:
            data[name].remove(c)
            write_to_json(data)
            return True
    return False
