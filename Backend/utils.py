from math import sin, cos, acos, asin, radians

def calculate_distance(lat1, lon1, lat2, lon2):
    return acos((sin(radians(lat1)) * sin(radians(lat2))) + (cos(radians(lat1)) * cos(radians(lat2))) * (cos(radians(lon2) - radians(lon1)))) * 6371
