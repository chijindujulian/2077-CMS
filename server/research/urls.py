from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet, index

router = DefaultRouter()
router.register(r'articles', ArticleViewSet, basename='article')

urlpatterns = [
    path('', index, name='index'),  
    path('api/', include(router.urls)),
]

