from django.urls import path
from .views import index, ArticleListCreate, ArticleDetail, increment_view



# Define the URL patterns for the research app
urlpatterns = [
    path('', index, name='index'),
    path('articles/', ArticleListCreate.as_view(), name='article-list-create'),
    path('articles/<int:pk>/', ArticleDetail.as_view(), name='article'),
    path('articles/<int:pk>/increment-views/', increment_view, name='increment_view'), # Increment views for an article
    ]