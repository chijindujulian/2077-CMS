from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.utils import timezone

# Create your models here.
class Article(models.Model):
    
    # Custom manager to retrieve only ready articles
    class ArticleObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(status='ready')

    options = (
        ('draft', 'Draft'),
        ('ready', 'Ready'),
    )
    
    title = models.CharField(max_length=100)
    content = models.TextField()
    summary = models.TextField(blank=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    slug = models.SlugField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=100, blank=True)
    thumb = models.ImageField(default='./static/images/img.webp', blank=True)    
    views = models.PositiveBigIntegerField(default=0)
    status = models.CharField(
        max_length=10, choices=options, default='draft')
    objects = models.Manager()  # default manager
    postobjects = ArticleObjects()  # custom manager

    # Order articles by creation date (most recent)
    class Meta:
        ordering = ('-created_at',)

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
    
    