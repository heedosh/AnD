from django.shortcuts import render

def tm_public(request):
    return render(request, 'tm-public/tm-public.html')

# Create your views here.
