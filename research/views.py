from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

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

# Increment views for an article
@csrf_exempt
@require_POST
def increment_view(request, pk):
    article = get_object_or_404(Article, pk=pk)
    article.views += 1
    article.save()
    return JsonResponse({'views': article.views})