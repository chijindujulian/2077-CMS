from django import forms
from django_ckeditor_5.widgets import CKEditor5Widget
from .models import Article

class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = '__all__'  # Include all fields from the model
        widgets = {
            'content': CKEditor5Widget(attrs={"class": "django_ckeditor_5"}),  # Apply CKEditorWidget only to 'content' field
        }
