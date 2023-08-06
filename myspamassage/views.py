from django.shortcuts import render
from django.http import HttpResponse
import http.client
import json
from requests import get
'''
import pyrebase


firebaseConfig = {
  "apiKey": "AIzaSyCgRXTxrHqM_mkhbVG4xE7q-5XHrjIPUDw",
  "authDomain": "myspamassage-56952.firebaseapp.com",
  "projectId": "myspamassage-56952",
  "storageBucket": "myspamassage-56952.appspot.com",
  "messagingSenderId": "438801397715",
  "appId": "1:438801397715:web:d2bb8ed49d40cc31df2126",
  "measurementId": "G-88DD8S3FFS",
  "databaseURL": "https://myspamassage-56952-default-rtdb.asia-southeast1.firebasedatabase.app",
}

firebase = pyrebase.initialize_app(firebaseConfig)

db = firebase.database()
'''
# Create your views here.

# def connectAPI(domain, param):
#     conn = http.client.HTTPSConnection(domain)

#     conn.request("GET", param)

#     res = conn.getresponse()
#     data = res.read()
#     data = data.decode("utf-8")
#     dataJson = json.loads(data)

#     return dataJson

def homePage (request):
    return render(request, 'index.html')

def bookNow (request):
    # conn = http.client.HTTPSConnection("api.ipify.org")
    # conn.request("GET", "/?format=json")
    # res = conn.getresponse()
    # data = res.read()
    # getIp = connectAPI("api.ipify.org", "/?format=json")
    # ipAdd = getIp["ip"]
    # #print(ipAdd)

    # getCurrencyURL = 'https://ipapi.co/' + ipAdd +'/json/'
    # getCurrency = get(getCurrencyURL)
    # #ipAdd = getIp["ip"]
    # getCurrency = getCurrency.json()
    # currency = getCurrency["currency"]
    # #print(currency)
    
    # USDPrice = 5
    # convertParam = "/api/v1/exchange/convert?base=USD&to=" + currency + "&amount=" \
    # + str(USDPrice) + "&apiKey=kppeikr1r38nj4mnf915dq1ce6hc568bpjilqg7co30ih4kc1pu"
    # converted = connectAPI("anyapi.io", convertParam)
    # converted = converted["converted"]

    # price1 = "{:.2f} ".format(converted) + currency
    # price2 = "{:.2f} ".format(converted*2) + currency
    # price3 = "{:.2f} ".format(converted*3) + currency
    # # print("price1:", price1)
    # # print("price2:", price2)
    # # print("price3:", price3)
    converted = 150
    price1 = 150
    price2 = 200
    price3 = 300
    context = {"current": converted, "price1": price1, "price2": price2, "price3": price3}

    # return render(request, 'booknow.html', context)
    return render(request, 'booknow.html', context)

def paypal(request):
    return render(request, 'paypal.html')

