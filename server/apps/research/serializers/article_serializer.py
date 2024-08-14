from rest_framework import serializers
from ..models import Article, Author
from .author_serializer import AuthorSerializer
from .category_serializer import CategorySerializer

class ArticleSerializer(serializers.ModelSerializer):
    """Serializer for the Article model."""
    authors = AuthorSerializer(many=True, read_only=True)
    slug = serializers.ReadOnlyField()
    category = CategorySerializer()
    views = serializers.ReadOnlyField()

    class Meta:
        model = Article
        fields = '__all__'

class ArticleCreateUpdateSerializer(serializers.ModelSerializer):
    """Serializer for creating and updating articles."""
    authors = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all(), many=True, required=False)

    class Meta:
        model = Article
        fields = ['title', 'category', 'thumb', 'content', 'summary', 'status', 'authors']

    # TODO : Debug this method to add the logged-in user as the author when creating a new article
    def create(self, validated_data):
        request = self.context.get('request')
        authors = validated_data.pop('authors', [])
        if not authors and request and hasattr(request, 'user'):
            user_author = Author.objects.filter(user=request.user).first()
            if user_author:
                authors = [user_author]
        article = Article.objects.create(**validated_data)
        if authors:
            article.authors.set(authors)
        return article

    def update(self, instance, validated_data):
        authors = validated_data.pop('authors', [])
        instance = super().update(instance, validated_data)
        if authors:
            instance.authors.set(authors)  # Update authors for the article
        return instance
