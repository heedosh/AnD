from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.page_offline, name='page-offline'),
]
