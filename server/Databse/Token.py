from tinydb import TinyDB, Query
from tinydb.table import Document
from uuid import uuid4
from datetime import datetime
import pytz


TimeZone = pytz.timezone("Asia/Shanghai")


class Token:
    id: int
    uuid: str
    timestamp: float
    user_id: int

    def __init__(self, doc: Document) -> None:
        self.id = doc.doc_id
        self.uuid = doc['uuid']
        self.timestamp = doc['timestamp']
        self.user_id = doc['user_id']

    def is_valid(self):
        now = datetime.now(TimeZone).timestamp()
        return (now-self.timestamp) < 24*60*60


DB = TinyDB('token.json')


def add_token(user_id):
    '''
    Add and remove old token
    '''
    DB.remove(Query().user_id == user_id)
    uid = str(uuid4())
    DB.insert({'uuid': uid, 'user_id': user_id,
              'timestamp': datetime.now(TimeZone).timestamp()})
    return uid


def get_token_userID(uuid):
    if not uuid:
        return -1
    token = get_token_by_uuid(uuid)
    if not token:
        return -1
    if token.is_valid():
        return token.user_id
    DB.remove(doc_ids=[token.id])
    return -1


def get_token_by_uuid(uuid):
    doc = DB.get(Query().uuid == uuid)
    if not doc:
        return None
    return Token(doc)


def get_token_by_id(id):
    doc = DB.get(doc_id=id)
    if not doc:
        return None
    return Token(doc)


def get_all_tokens():
    return [Token(doc) for doc in DB.all()]
