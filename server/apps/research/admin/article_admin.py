from django.contrib import admin
from django import forms
from django_ckeditor_5.widgets import CKEditor5Widget
from apps.research.models import Article, Author

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    """Admin interface for the Article model."""
    
    fieldsets = [
        ('Article Details', {'fields': ['title', 'category', 'thumb', 'content', 'summary', 'status', 'authors']}),
    ]
    list_display = ('title', 'display_authors', 'status', 'views', 'category', 'created_at')
    search_fields = ('title', 'authors__user__username', 'authors__twitter_username', 'content')
    list_per_page = 25    
    list_filter = ('authors', 'status', 'category', 'created_at')
    readonly_fields = ('views', 'slug')
    list_editable = ('status',)
    
    def get_form(self, request, obj=None, **kwargs):
        """Return a form with CKEditor5Widget for the content field."""
        form = super().get_form(request, obj, **kwargs)
        if 'content' in form.base_fields:
            form.base_fields['content'].widget = CKEditor5Widget(attrs={"class": "django_ckeditor_5"})
        return form
    
    def display_authors(self, obj):
        """Return a comma-separated list of authors for the article."""
        return ", ".join(author.user.username for author in obj.authors.all())
    display_authors.short_description = 'Authors'
    
    def save_model(self, request, obj, form, change):
        """Automatically add the logged-in user as the author when creating a new article."""
        if not change:  # If creating a new article
            author = Author.objects.filter(user=request.user).first()  # Get the Author instance for the logged-in user
            if author:
                obj.authors.add(author)  
        super().save_model(request, obj, form, change)
   
    def has_change_permission(self, request, obj=None):
        """Check if the user has permission to change the article."""
        
        if request.user.is_superuser:
            return True    
        if not super().has_change_permission(request, obj):
            return False
        if obj is not None and not obj.authors.filter(user=request.user).exists():
            return False
        return True
        
    def has_delete_permission(self, request, obj=None):
        """Check if the user has permission to delete the article."""
        if request.user.is_superuser:
            return True
        if not super().has_delete_permission(request, obj):
            return False
        if obj is not None and not obj.authors.filter(user=request.user).exists():
            return False
        return True
