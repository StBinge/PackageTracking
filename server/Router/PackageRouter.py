from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from Databse import Package, Record, UserDB
from Dependency import get_userID
from typing import Optional,Annotated


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


router = APIRouter(prefix='/api/package', tags=['package'])


@router.get('/', dependencies=[Depends(get_userID)])
def get_package_info(code: str = None, full: bool = False):
    package = Package.get_package_by_code(code)
    if not package:
        raise HTTPException(404, '没有找到相应的包裹!')
    records = []
    if full:
        records = Record.get_records_of_package(package.id)
        records.sort(key=lambda rec: rec.id)
        if records:
            records = [RecordItem(
                user=UserDB.get_user_by_id(rec.user_id).name,
                location=rec.location,
                datetime=rec.datetime)
                for rec in records]
    return PackageInfoItem(code=package.code, content=package.content, records=records)


@router.post('/add', dependencies=[Depends(get_userID)])
def add_package(item: NewPackageItem):
    if Package.check_package_exits(item.code):
        raise HTTPException(400, '包裹码已经存在!')
    return Package.add_package(item.code, item.content)


@router.post('/transfer')
def transfer_package(item: NewTransferItem, user_id:int= Depends(get_userID)):
    package = Package.get_package_by_code(item.package_code)
    if not package:
        raise HTTPException(400, "没有找到相应的包裹!")
    if package.signed:
        raise HTTPException(400, '包裹已经签收, 无法添加记录!')
    record = Record.add_record(
        package.id, user_id, item.location, item.package_status, item.package_comment)
    if not record:
        raise HTTPException(400, '添加物流记录失败!')
    if item.signed:
        if not Package.set_package_signed(item.package_code):
            raise HTTPException(400, '签收包裹失败!')
    return record


def check_package_code(code):
    if not Package.validate_code(code):
        raise HTTPException(400, '非法包裹码!')


@router.post('/post')
def post_package(item: NewPostItem, user_id:int=Depends(get_userID)):
    check_package_code(item.package_code)

    if not item.package_content:
        raise HTTPException(400, '包裹内容不可以为空!')

    if not item.location:
        raise HTTPException(400, '地址不可以为空!')

    package = Package.get_package_by_code(item.package_code)
    if package:
        if package.posted:
            raise HTTPException(400, '包裹已经发出!')
    else:
        package = Package.add_package(item.package_code, item.package_content)
        if not package:
            raise HTTPException(400, '添加新包裹失败!')

    record = Record.add_record(
        package.id, user_id, item.location, '完整', item.package_comment)

    if not record:
        raise HTTPException(400, '添加物流记录成功!')

    if not Package.set_package_posted(package.code):
        raise HTTPException(400, '设置包裹为发出状态失败!')
    return
