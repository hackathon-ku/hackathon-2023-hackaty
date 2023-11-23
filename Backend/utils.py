from geopy.distance import distance
from datetime import datetime


# gmaps = googlemaps.Client(config("GOOGLE_MAP_API_KEY", cast=str))
def calculate_distance_linear(lat1, lon1, lat2, lon2):
    print(lat1, lon1)
    return distance((lat1, lon1), (lat2, lon2)).km


def is_later_than(dt_str1, dt_str2):
    # Parse the strings into datetime objects

    dt2 = datetime.fromisoformat(dt_str2)
    return dt_str1 > dt2

