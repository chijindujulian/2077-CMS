from django.db.models import F
from django.shortcuts import render
from rest_framework import viewsets

from .models import Article
from .permissions import ArticleUserWritePermission
from .serializers import ArticleSerializer
from ..common.responses import CustomResponse


# Custom Permissions for the API

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
        return CustomResponse.success(message="Retrieved successfully", data=serializer.data)
