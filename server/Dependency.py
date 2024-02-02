from fastapi import Header,HTTPException
from typing import Annotated
from Databse import Token,UserDB
from pydantic import BaseModel



async def get_user(x_token:str=Header()):
    user_id = Token.get_token_userID(x_token)
    user=UserDB.get_user_by_id(user_id)
    if not user:
        raise HTTPException(401,'需要登录!')
    return user