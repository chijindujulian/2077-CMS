from rest_framework import viewsets, status
from rest_framework.response import Response
from django.db.models import F
from .models import Article
from .serializers import ArticleSerializer
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.filter(status='ready')

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views = F('views') + 1
        instance.save(update_fields=['views'])
        # Refresh the instance to get the updated views value
        instance.refresh_from_db(fields=['views'])
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
