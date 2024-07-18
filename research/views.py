from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer
from django.shortcuts import render

""" def index(request):
    return render(request, 'index.html')

def blog(request):
    return render(request, 'output.html')
 """
class ArticleListCreate(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer