from fastapi import Header, HTTPException
from typing import Annotated
from Databse import Token, UserDB
from pydantic import BaseModel





async def get_userID(x_token: str = Header()):
    user_id = Token.get_token_userID(x_token)
    if user_id<0:
        raise HTTPException(401, '未检测到合法用户!')
    return user_id
