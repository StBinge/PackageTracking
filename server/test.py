import requests

url='https://api.kertennet.com/geography/locationInfo?lat=23.078717&lng=113.881279'
res=requests.get(url)
print(res.json())