from .models import Article

def get_article_by_id(article_id):
    return Article.objects.get(pk=article_id)

def get_ready_articles():
    return Article.postobjects.all()
