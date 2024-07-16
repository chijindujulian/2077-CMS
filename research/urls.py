from django.urls import path
from . import views

# Define the URL patterns for the research app
urlpatterns = [
    path('', views.index, name='index'),
    path('research/', views.researchPage, name='research'),
    ]