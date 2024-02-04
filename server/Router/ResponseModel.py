from pydantic import BaseModel


class RecordItem(BaseModel):
    user: str
    location: str
    datetime: str
    status: str
    comment: str




class PackageInfoItem(BaseModel):
    code: str
    content: str
    records: list[RecordItem]
    signed:bool
    posted:bool