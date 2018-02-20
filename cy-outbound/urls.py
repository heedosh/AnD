from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.cy_outbound, name='cy-outbound'),
]
