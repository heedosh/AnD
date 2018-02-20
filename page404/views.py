from django.shortcuts import render

def page404(request):
    return render(request, 'page404/page404.html')

# Create your views here.
