from rest_framework import viewsets
from rest_framework.response import Response
from django.db.models import F
from django.shortcuts import get_object_or_404
from .models import Article
from .serializers import ArticleSerializer
from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.permissions import BasePermission, SAFE_METHODS

# Custom Permissions for the API
class ArticleUserWritePermission(BasePermission):
    message = 'Editing articles is restricted to the author only.'
    
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.author == request.user

def index(request):
    return render(request, 'index.html')

class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = [ArticleUserWritePermission]
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.filter(status='ready')

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views = F('views') + 1
        instance.save(update_fields=['views'])
        instance.refresh_from_db(fields=['views'])
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
