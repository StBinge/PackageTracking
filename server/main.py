from App import app
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse,FileResponse

app.mount('/assets',StaticFiles(directory='static/assets'),name='static')

@app.get('/')
async def index():
    return FileResponse('./static/index.html')


if __name__ == '__main__':
    import uvicorn,os
    cur_dir=os.path.dirname(os.path.realpath(__file__))
    cert_file=os.path.join(cur_dir,'cert.pem')
    key_file=os.path.join(cur_dir,'private.key')
    uvicorn.run(app, host='192.168.223.29', port=8485,ssl_certfile=cert_file,ssl_keyfile=key_file)