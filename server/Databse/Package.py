from tinydb import TinyDB,Query
from tinydb.table import Document

DB=TinyDB('package.json')

class Package:
    id:int
    code:str
    content:str
    posted:bool
    signed:bool
    def __init__(self,document:Document) -> None:
        self.id=document.doc_id
        self.code=document['code']
        self.content=document['content']
        self.signed=document['signed']
        self.posted=document['posted']

def check_package_exits(code):
    Package=Query()
    return DB.contains(Package.code==code)


def add_package(code,content):
    if check_package_exits(code):
        return -1
    return DB.insert({'code':code,'content':content,'posted':False,'signed':False})

def get_all_packages():
    return [Package(doc) for doc in DB.all()]

def get_package_by_code(code):
    doc=DB.get(Query().code==code)
    if not doc:
        return None
    return Package(doc)

def get_package_by_id(id):
    doc=DB.get(doc_id=id)
    if not doc:
        return None
    return Package(doc)

def sign_package(code,state:bool=True):
    # package=get_package_by_code(code)
    ids=DB.update({'signed':state},Query().code==code)
    return len(ids)==1

def post_package(code,state:bool=True):
    ids=DB.update({'posted':state},Query().code==code)
    return len(ids)==1