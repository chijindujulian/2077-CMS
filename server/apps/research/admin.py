from django.contrib import admin
from django import forms
from django_ckeditor_5.widgets import CKEditor5Widget
from apps.research.models import Article, Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')

    list_per_page = 25

    search_fields = ('name',)


# Override Django Admin config with CK Editor
@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    # Order in which fields are displayed in the admin panel
    fieldsets = [
        (
            '2077 Collective Articles', {
                'fields': [
                    'title',
                    'category',
                    'thumb',
                    'content',
                    'summary',
                    'status',
                ],
            }
        ),
    ]
    
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['content'].widget = CKEditor5Widget(attrs={"class": "django_ckeditor_5"})
        return form
    
    list_display = ('title', 'author', 'status', 'views', 'category', 'created_at')

    search_fields = ('title', 'content', 'author__username')
    # Number of articles per page
    list_per_page = 25

    # Add filters to the right side of the admin panel
    list_filter = ('author', 'status', 'category', 'created_at')

    # Make 'views' read-only
    readonly_fields = ('views', 'author', 'slug')

    # Make fields 'editable'
    list_editable = ['status']

    # Override save_model to automatically set author to the logged-in user when creating a new article
    def save_model(self, request, obj, form, change):
        if not change:
            obj.author = request.user
        super().save_model(request, obj, form, change)

    # Override has_change_permission to restrict editing to the author only
    def has_change_permission(self, request, obj=None):
        has_class_permission = super().has_change_permission(request, obj)
        if not has_class_permission:
            return False
        if obj is not None and obj.author != request.user:
            return False
        return True

    # Override has_delete_permission to restrict deleting to the author only
    def has_delete_permission(self, request, obj=None):
        has_class_permission = super().has_delete_permission(request, obj)
        if not has_class_permission:
            return False
        if obj is not None and obj.author != request.user:
            return False
        return True
