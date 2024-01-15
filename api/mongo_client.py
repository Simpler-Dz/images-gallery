import os
from pymongo import MongoClient
from dotenv import load_dotenv


BASEDIR = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(BASEDIR, '.env.local'))
# load_dotenv(dotenv_path='./.env.local')

MONGO_URL = os.environ.get("MONGO_URL", "mongo")
MONGO_USERNAME = os.environ.get("MONGO_USERNAME", "")
MONGO_PASSWORD = os.environ.get("MONGO_PASSWORD", "")
MONGO_PORT = os.environ.get("MONGO_PORT", 27017)

mongo_client = MongoClient(
  host=MONGO_URL,
  username=MONGO_USERNAME,
  password=MONGO_PASSWORD,
  port=MONGO_PORT,
)

def insert_test_document():
  db = mongo_client.test 
  test_collection = db.test_collection
  res = test_collection.insert_one({"name":"zhunzhunzhang", "instructor": False})
  print(res)
