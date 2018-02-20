from django.shortcuts import render

def page_offline(request):
    return render(request, 'page-offline/page-offline.html')

# Create your views here.
