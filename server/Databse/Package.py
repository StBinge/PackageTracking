from tinydb import TinyDB, Query
from tinydb.table import Document

DB = TinyDB('package.json')


class Package:
    id: int
    code: str
    content: str
    posted: bool
    signed: bool

    def __init__(self, document: Document) -> None:
        self.id = document.doc_id
        self.code = document['code']
        self.content = document['content']
        self.signed = document['signed']
        self.posted = document['posted']

def validate_code(code:str):
    parts=[
        [4,2024,2100],
        [2,0,12],
        [2,0,31],
        [2,0,24],
        [2,0,60],
        [2,0,60],
        [3,0,1000],
    ]
    idx=0
    try:
        for l,mi,ma in parts:
            n=int(code[idx:idx+l])
            idx+=l
            if n<mi or n>ma:
                return False
    except:
        return False
    return True

def check_package_exits(code):
    Package = Query()
    return DB.contains(Package.code == code)


def add_package(code, content):
    if check_package_exits(code):
        return None
    idx = DB.insert({'code': code, 'content': content,
                    'posted': False, 'signed': False})
    return get_package_by_id(idx)


def get_all_packages():
    return [Package(doc) for doc in DB.all()]


def get_package_by_code(code):
    if not code:
        return None
    doc = DB.get(Query().code == code)
    if not doc:
        return None
    return Package(doc)


def get_package_by_id(id):
    doc = DB.get(doc_id=id)
    if not doc:
        return None
    return Package(doc)


def set_package_signed(code, state: bool = True):
    # package=get_package_by_code(code)
    ids = DB.update({'signed': state}, Query().code == code)
    return len(ids) == 1

def set_package_posted(code,state=True):
    ids = DB.update({'posted': state}, Query().code == code)
    return len(ids) == 1
