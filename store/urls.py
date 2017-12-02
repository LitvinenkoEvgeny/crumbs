from django.conf.urls import url
from . import views

app_name = 'store'
urlpatterns = [
    url(r'^order/(?P<pk>\d+)/$', views.order, name='order'),
]
