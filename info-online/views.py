from django.shortcuts import render

def info_online(request):
    return render(request, 'info-online/info-online.html')

# Create your views here.
