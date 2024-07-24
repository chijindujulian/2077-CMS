from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    slug = serializers.ReadOnlyField()
    views = serializers.ReadOnlyField()
    class Meta:
        model = Article
        fields = '__all__'