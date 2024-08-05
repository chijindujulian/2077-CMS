from rest_framework import serializers

from .models import Article


class CategorySerializer(serializers.Serializer):
    id = serializers.UUIDField()
    name = serializers.CharField()


class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    slug = serializers.ReadOnlyField()
    category = CategorySerializer()
    views = serializers.ReadOnlyField()

    class Meta:
        model = Article
        fields = '__all__'
