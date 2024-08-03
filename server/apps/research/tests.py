from django.test import TestCase
from django.contrib.auth.models import User
from django.utils.text import slugify
from .models import Article
from datetime import datetime, timedelta
from django.utils import timezone

class ArticleModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')

    def test_article_creation(self):
        article = Article.objects.create(
            title='Test Article',
            content='This is a test article.',
            summary='This is a summary.',
            author=self.user,
            status='ready'
        )
        self.assertEqual(article.title, 'Test Article')
        self.assertEqual(article.content, 'This is a test article.')
        self.assertEqual(article.summary, 'This is a summary.')
        self.assertEqual(article.author, self.user)
        self.assertEqual(article.status, 'ready')
        self.assertEqual(article.views, 0)

    def test_slug_generation(self):
        article = Article.objects.create(
            title='Test Article',
            content='This is a test article.',
            author=self.user,
            status='ready'
        )
        self.assertEqual(article.slug, 'test-article')

        article2 = Article.objects.create(
            title='Test Article',
            content='This is another test article.',
            author=self.user,
            status='ready'
        )
        self.assertEqual(article2.slug, 'test-article-1')

    def test_custom_manager(self):
        Article.objects.create(
            title='Draft Article',
            content='This is a draft article.',
            author=self.user,
            status='draft'
        )
        ready_article = Article.objects.create(
            title='Ready Article',
            content='This is a ready article.',
            author=self.user,
            status='ready'
        )
        articles = Article.postobjects.all()
        self.assertEqual(articles.count(), 1)
        self.assertEqual(articles.first(), ready_article)

    def test_ordering(self):
        now = timezone.now()
        article1 = Article.objects.create(
            title='Article 1',
            content='Content 1',
            author=self.user,
            created_at=now - timedelta(days=1),
            status='ready'
        )
        article2 = Article.objects.create(
            title='Article 2',
            content='Content 2',
            author=self.user,
            created_at=now,
            status='ready'
        )
        articles = Article.objects.all()
        self.assertEqual(articles.first(), article2)
        self.assertEqual(articles.last(), article1)

    def test_default_views(self):
        article = Article.objects.create(
            title='Test Article',
            content='This is a test article.',
            author=self.user,
            status='ready'
        )
        self.assertEqual(article.views, 0)

    def test_increment_views(self):
        article = Article.objects.create(
            title='Test Article',
            content='This is a test article.',
            author=self.user,
            status='ready'
        )
        article.views += 1
        article.save()
        article.refresh_from_db()
        self.assertEqual(article.views, 1)
