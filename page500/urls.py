from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.page500, name='page500'),
]
