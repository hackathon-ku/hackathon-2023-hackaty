from decouple import config
from pymongo import MongoClient

client = MongoClient(
    config("MONGO_URL", cast=str, default="mongodb://localhost:27017"),
    tls=True,
    tlsAllowInvalidCertificates=True,
)

mongo_connection = client['Report']
