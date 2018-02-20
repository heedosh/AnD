from django.shortcuts import render

def db_list(request):
    return render(request, 'db-list/db-list.html')

# Create your views here.
