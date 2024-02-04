from tinydb import TinyDB,Query
from tinydb.table import Document
import pytz,datetime
TimeZone=pytz.timezone("Asia/Shanghai")

DB=TinyDB('record.json')

class Record:
    id:int
    package_id:int
    user_id:int
    location:str
    datetime:str
    status:str
    comment:str

    def __init__(self,document:Document) -> None:
        self.id=document.doc_id
        self.package_id=document['package_id']
        self.user_id=document['user_id']
        self.location=document['location']
        self.datetime=document['datetime']
        self.status=document['status']
        self.comment=document['comment']

def get_records_of_package(package_id):
    docs=DB.search(Query().package_id==package_id)
    return [Record(doc) for doc in docs]

def get_records_of_user(user_id):
    docs=DB.search(Query().user_id==user_id)
    return [Record(doc) for doc in docs]

def get_record_by_id(id):
    doc=DB.get(doc_id=id)
    if not doc:
        return None
    return Record(doc)

def add_record(package_id,user_id,location,status,comment):
    id= DB.insert({
        'package_id':package_id,
        'user_id':user_id,
        'location':location,
        'datetime':datetime.datetime.now(TimeZone).strftime("%Y-%m-%d %H:%M:%S"),
        'status':status,
        'comment':comment
    })
    return get_record_by_id(id)
