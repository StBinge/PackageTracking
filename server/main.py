from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Router import UserRouter, PackageRouter

SecondsOfDay = 24*60*60

app = FastAPI()
app.add_middleware(CORSMiddleware,
                   allow_origins=['*'],
                   allow_credentials=False,
                   allow_methods=["*"],
                   allow_headers=["*"],
                   expose_headers=['*'])

app.include_router(UserRouter.router)
app.include_router(PackageRouter.router)


async def post_package():
    pass

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8484)
