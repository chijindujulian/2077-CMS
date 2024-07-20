from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    summary = models.TextField(blank=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    slug = models.SlugField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=100, blank=True)
    thumb = models.ImageField(default='./static/images/img.webp', blank=True)    
    views = models.PositiveBigIntegerField(default=0)

    def __str__(self):
        return self.title
    
    # Generate a unique slug for each article
    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            num = 1
            while Article.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{num}"
                num += 1
            self.slug = slug
        super().save(*args, **kwargs)
    
    def snippet(self):
        return self.content[:50] + '...'