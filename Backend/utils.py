from geopy.distance import distance
import googlemaps
from decouple import config

gmaps = googlemaps.Client(config("GOOGLE_MAP_API_KEY", cast=str))
def calculate_distance_linear(lat1, lon1, lat2, lon2):
    return distance((lat1, lon1), (lat2, lon2)).km


def calculate_distance_road(lat1, lon1, lat2, lon2):
    distance = gmaps.distance_matrix([str(lat1) + " " + str(lon1)], [str(lat2) + " " + str(lon2)], mode='walking')['rows'][0]['elements'][0]['distance']['text']
    dis, unit = distance.split()
    return round(float(dis), 2), unit
