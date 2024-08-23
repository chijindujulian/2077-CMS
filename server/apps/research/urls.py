from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet, index
from django.conf import settings
from django.conf.urls.static import static
from .utils import astro_proxy

router = DefaultRouter()
router.register(r'articles', ArticleViewSet, basename='article')

urlpatterns = [
    path('', astro_proxy, name='astro_proxy'),  
    path('api/', include(router.urls)),
    
    # Custom URL for retrieving articles by slug or UUID
    re_path(r'^api/articles/(?P<identifier>[-\w0-9a-fA-F]+)/$', ArticleViewSet.as_view({'get': 'retrieve_by_identifier'}), name='article-detail-by-identifier'),

    # Custom URL for retrieving articles by category
    re_path(r'^api/articles/category/(?P<category>[-\w]+)/$', ArticleViewSet.as_view({'get': 'retrieve_by_category'}), name='article-list-by-category'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)