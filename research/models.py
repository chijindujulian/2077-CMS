from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    summary = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    slug = models.SlugField()
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=100)
    thumb = models.ImageField(default='./static/images/img.webp', blank=True)    
    views = models.PositiveBigIntegerField(default=0)

    def __str__(self):
        return self.title

    def snippet(self):
        return self.content[:50] + '...'