from django.contrib import admin
from .models import Article
from ckeditor.widgets import CKEditorWidget
from django.db import models

# Override Django Admin config with CK Editor
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'views', 'category', 'created_at')  # Customize as needed
    readonly_fields = ('views', 'author', 'slug')  # Make 'views' read-only
    
    
    formfield_overrides = {
        models.TextField: {'widget': CKEditorWidget},
    }
    
    def save_model(self, request, obj, form, change):
        if not change:  # If creating a new article
            obj.author = request.user  # Automatically set author to the logged-in user
        super().save_model(request, obj, form, change)

# Register your models here.
admin.site.register(Article, ArticleAdmin)