from fastapi import APIRouter, HTTPException, Depends
from Databse import Package, Record, UserDB
from Dependency import get_userID
from Router import RequestModel,ResponseModel

def convert_record(record:Record.Record):
    return ResponseModel.RecordItem(
        user=UserDB.get_user_by_id(record.user_id).name,
        location=record.location,
        datetime=record.datetime,     
        status=record.status,
        comment=record.comment
    )





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
            records = [convert_record(rec)
                for rec in records]
    return ResponseModel.PackageInfoItem(code=package.code, content=package.content, records=records,signed=package.signed,posted=package.posted)


@router.post('/add', dependencies=[Depends(get_userID)])
def add_package(item: RequestModel.NewPackageItem):
    if Package.check_package_exits(item.code):
        raise HTTPException(400, '包裹码已经存在!')
    return Package.add_package(item.code, item.content)


@router.post('/transfer')
def transfer_package(item: RequestModel.NewTransferItem, user_id:int= Depends(get_userID)):
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
    return convert_record(record)


def check_package_code(code):
    if not Package.validate_code(code):
        raise HTTPException(400, '非法包裹码!')


@router.post('/post')
def post_package(item: RequestModel.NewPostItem, user_id:int=Depends(get_userID)):
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
    return convert_record(record)
