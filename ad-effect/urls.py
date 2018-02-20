from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.ad_effect, name='ad-effect'),
]
