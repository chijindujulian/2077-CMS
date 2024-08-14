from django.db import models
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field
from apps.common.models import BaseModel
from apps.research.managers import ArticleObjects
from .category import Category
from .author import Author

class Article(BaseModel):
    """Model for articles."""
    
    options = (
        ('draft', 'Draft'),
        ('ready', 'Ready'),
    )

    title = models.CharField(max_length=100)
    content = CKEditor5Field(null=True, blank=True, config_name='extends')
    summary = models.TextField(blank=True)
    authors = models.ManyToManyField(Author, blank=True, related_name='articles')
    slug = models.SlugField(blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="articles")
    thumb = models.ImageField(upload_to='images/', default='../media/images/2077-Collective.png', blank=True)
    views = models.PositiveBigIntegerField(default=0)
    status = models.CharField(max_length=10, choices=options, default='draft')
    objects = models.Manager()
    post_objects = ArticleObjects()

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        """Override the save method to generate a unique slug."""
        if not self.slug:
            self.slug = self.generate_unique_slug()
        super().save(*args, **kwargs)

    def generate_unique_slug(self):
        """Generate a unique slug for the article."""
        base_slug = slugify(self.title)
        slug = base_slug
        num = 1
        while Article.objects.filter(slug=slug).exists():
            slug = f"{base_slug}-{num}"
            num += 1
        return slug
