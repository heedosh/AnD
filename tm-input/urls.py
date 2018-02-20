from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.tm_input, name='tm-input'),
]
