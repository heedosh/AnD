from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.locked, name='locked'),
]
