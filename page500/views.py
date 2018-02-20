from django.shortcuts import render

def page500(request):
    return render(request, 'page500/page500.html')

# Create your views here.
