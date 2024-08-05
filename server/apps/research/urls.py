from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet, index
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'articles', ArticleViewSet, basename='article')

urlpatterns = [
    path('', index, name='index'),  
    path('api/', include(router.urls)),      
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

