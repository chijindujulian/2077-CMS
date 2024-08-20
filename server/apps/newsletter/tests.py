# tests.py
from django.test import TestCase, Client
from django.urls import reverse
from .models import Subscriber
from .forms import SubscribeForm

class NewsletterViewsTest(TestCase):
    
    def setUp(self):
        self.client = Client()
        self.subscribe_url = reverse('subscribe')  # Adjust if URL name is different
        self.unsubscribe_url = reverse('unsubscribe', args=['test@example.com'])
    
    def test_subscribe_view_get(self):
        response = self.client.get(self.subscribe_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'newsletter/subscribe.html')
        self.assertIsInstance(response.context['form'], SubscribeForm)
    
    def test_subscribe_view_post_valid(self):
        response = self.client.post(self.subscribe_url, {'email': 'test@example.com'})
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'newsletter/success.html')
        self.assertEqual(Subscriber.objects.count(), 1)
        self.assertEqual(Subscriber.objects.get().email, 'test@example.com')
    
    def test_subscribe_view_post_invalid(self):
        response = self.client.post(self.subscribe_url, {'email': ''})
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'newsletter/subscribe.html')
        self.assertFormError(response, 'form', 'email', 'This field is required.')
    
    def test_unsubscribe_view_valid(self):
        Subscriber.objects.create(email='test@example.com', is_active=True)
        response = self.client.get(reverse('unsubscribe', args=['test@example.com']))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'newsletter/unsubscribe_success.html')
        self.assertFalse(Subscriber.objects.get(email='test@example.com').is_active)
    
    def test_unsubscribe_view_invalid(self):
        response = self.client.get(reverse('unsubscribe', args=['nonexistent@example.com']))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'newsletter/unsubscribe_fail.html')
        self.assertEqual(Subscriber.objects.count(), 0)
