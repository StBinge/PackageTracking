from fastapi import APIRouter, HTTPException, Response, Header
from Databse import Token, UserDB
from pydantic import BaseModel
from enum import Enum
from typing import Optional, Union, Annotated

# class Permission(Enum):
#     View:1
#     Transfer:0b10
#     Manage


class Group(Enum):
    Operator = 1
    Manager = 2


class UserItem(BaseModel):
    name: str
    password: str
    realname: Optional[str]

# class LoginResultItem(BaseModel):
#     token:str
#     group:Group


router = APIRouter(prefix='/api/user', tags=['user'])


@router.post('/signin')
async def sign_in(user: UserItem):
    if UserDB.check_user_exits(user.name) == False:
        raise HTTPException(401, '用户不存在!')

    user = UserDB.validate_user(user.name, user.password)
    if not user:
        raise HTTPException(401, '密码不正确!')

    uid = Token.add_token(user.id)
    return Response(uid)
    # return LoginResultItem(token=uid,group=Group.Operator)


@router.post('/signup')
async def sign_up(user: UserItem):
    id = UserDB.add_user(user.name, user.password, user.realname)
    if id < 0:
        raise HTTPException(400, '用户名已经被占用!')
    return Token.add_token(id)
    # uid=Token.add_token(id)
    # return LoginResultItem(token=uid,group=Group.Operator)


@router.get('/')
async def check_token(x_token:str=Header()):
    # x_token=
    if not x_token or Token.get_token_userID(x_token) < 0:
        raise HTTPException(401, '登录令牌不存在, 或者已经过期!')
    return x_token

