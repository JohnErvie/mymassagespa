from django.shortcuts import render
from django.http import HttpResponse
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

def homePage (request):
    return render(request, 'index.html')

def bookNow (request):
    return render(request, 'booknow.html')

def paypal(request):
    return render(request, 'paypal.html')

