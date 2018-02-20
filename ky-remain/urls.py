from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.ky_remain, name='ky-remain'),
]
