from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.ad_schedule, name='ad-schedule'),
]
