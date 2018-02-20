from django.shortcuts import render

def db_guest(request):
    return render(request, 'db-guest/db-guest.html')

# Create your views here.
