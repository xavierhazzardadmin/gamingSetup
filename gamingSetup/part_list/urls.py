from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='part_list-home')
]