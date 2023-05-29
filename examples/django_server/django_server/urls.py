from django.urls import path
from myapp.views import hello_world

urlpatterns = [
    path('hello/', hello_world),
]
