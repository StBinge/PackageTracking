from fastapi import FastAPI,Cookie,status,Response,HTTPException,Depends
from typing import Annotated,Union
from Databse import Token,User
import model

SecondsOfDay=24*60*60

app=FastAPI()


async def check_token(token:Annotated[Union[str,None],Cookie()]=None):
    if not token or Token.validate_token(token)==False:
        raise HTTPException(401,'Token not found or Token was expired!',headers={
            'Set-Cookie':'token=1;Path=/;Max-Age=0'
        })

async def get_user(token:Annotated[Union[str,None],Cookie()]=None):
    t=Token.get_token_by_uuid(token)
    return User.get_user_by_id(t.user_id)

@app.post('/user/login')
async def login(name:str,password:str,):
    user=User.validate_user(name,password)
    if not user:
        raise HTTPException(401,'User not Found or Password is wrong!')
    uid=Token.add_token(user.id)
    res=Response()
    res.set_cookie('token',uid,max_age=SecondsOfDay)
    return res

@app.post('/user/register')
async def register(user:model.User):
    id=User.add_user(user.name,user.password,user.nickname)
    if id<0:
        raise HTTPException(401,'User name has been used!')
    uid=Token.add_token(id)
    res=Response()
    res.set_cookie('token',uid,max_age=SecondsOfDay)
    return res

@app.post('/package/post',dependencies=[Depends(check_token)])
async def post_package():
    pass