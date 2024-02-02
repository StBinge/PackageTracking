from tinydb import TinyDB, Query
from tinydb.table import Document
# from pydantic import BaseModel

DB = TinyDB('user.json')


class User():
    id: int
    name: str
    password: str
    realname: str

    def __init__(self, document: Document) -> None:
        self.id = document.doc_id
        self.name = document['name']
        self.password = document['password']
        self.realname = document['realname']


def add_user(name, password, realname):
    if check_user_exits(name):
        return -1
    return DB.insert({'name': name, 'password': password, 'realname': realname})


def validate_user(name,password):
    q = Query()
    doc= DB.get(q.name == name and q.password == password)
    if not doc:
        return None
    return User(doc)


def check_user_exits(name):
    User = Query()
    return DB.contains(User.name == name)


def get_user_by_id(id) -> User:
    if id<0:
        return None
    doc=DB.get(doc_id=id)
    if not doc:
        return None
    return User(doc)

def get_user_by_name(name) -> User:
    doc=DB.get(Query().name==name)
    if not doc:
        return None
    return User(doc)

def get_all_users() -> list[User]:
    return [User(doc) for doc in DB.all()]
