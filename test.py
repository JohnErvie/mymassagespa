import http.client
import json

conn = http.client.HTTPSConnection("anyapi.io")

conn.request("GET", "/api/v1/exchange/convert?base=USD&to=EUR&amount=10000&apiKey=kppeikr1r38nj4mnf915dq1ce6hc568bpjilqg7co30ih4kc1pu")

res = conn.getresponse()
data = res.read()
data = data.decode("utf-8")
dataJson = json.loads(data)

print(dataJson["converted"])