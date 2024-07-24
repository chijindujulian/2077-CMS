from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field

class Article(models.Model):

    class ArticleObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='ready')

    options = (
        ('draft', 'Draft'),
        ('ready', 'Ready'),
    )

    title = models.CharField(max_length=100)
    content = CKEditor5Field(null=True, blank=True, config_name='extends')
    summary = models.TextField(blank=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    slug = models.SlugField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=100, blank=True)
    thumb = models.ImageField(upload_to='images/', default='../media/images/2077-Collective.png', blank=True)
    views = models.PositiveBigIntegerField(default=0)
    status = models.CharField(max_length=10, choices=options, default='draft')
    objects = models.Manager()
    postobjects = ArticleObjects()

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self.generate_unique_slug()
        super().save(*args, **kwargs)

    def generate_unique_slug(self):
        base_slug = slugify(self.title)
        slug = base_slug
        num = 1
        while Article.objects.filter(slug=slug).exists():
            slug = f"{base_slug}-{num}"
            num += 1
        return slug
