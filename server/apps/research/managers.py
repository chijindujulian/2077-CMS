from django.db import models


class ArticleObjects(models.Manager):
    """Custom manager for the Article model."""
    def get_queryset(self):
        return super().get_queryset().filter(status='ready')
