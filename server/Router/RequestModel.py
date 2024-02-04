from pydantic import BaseModel
from typing import Optional


class NewPackageItem(BaseModel):
    code: str
    content: str


class NewPostItem(BaseModel):
    package_code: str
    package_content: str
    location: str
    package_comment: Optional[str]


class NewTransferItem(BaseModel):
    package_code: str
    location: str
    package_status: str
    package_comment: Optional[str]
    signed: bool
