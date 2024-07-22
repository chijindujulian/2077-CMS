from .models import Article
from django.db.models import F

def increment_article_views(article: Article):
    """
    Increment the view count for the given article.
    """
    # Increment the view count atomically
    Article.objects.filter(pk=article.pk).update(views=F('views') + 1)
    article.refresh_from_db()

def create_article(**kwargs):
    """
    Create a new article with the given parameters.
    """
    return Article.objects.create(**kwargs)
