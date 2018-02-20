from django.shortcuts import render

def locked(request):
    return render(request, 'locked/locked.html')

# Create your views here.
