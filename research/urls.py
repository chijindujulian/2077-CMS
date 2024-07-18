from django.urls import path
from .views import ArticleListCreate, index, blog



# Define the URL patterns for the research app
urlpatterns = [
    path('', index, name='index'),
    path('blog/', blog, name='blog'),
    path('research/', ArticleListCreate.as_view(), name='article-list-create'),
    ]