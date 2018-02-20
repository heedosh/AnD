from django.shortcuts import render

def db_result(request):
    return render(request, 'db-result/db-result.html')

# Create your views here.
