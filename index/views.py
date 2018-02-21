from django.shortcuts import render
from  . import dao

def index(request):
    posts = dao.selectTest()
    return render(request, 'index/index.html', {'posts':posts})

# Create your views here.
