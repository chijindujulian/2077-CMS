from django.db import models


class ArticleObjects(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status='ready')
