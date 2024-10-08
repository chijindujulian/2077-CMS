from django.shortcuts import render
from django.http import JsonResponse
from .models import Subscriber
from django.views.decorators.csrf import csrf_exempt
from django.db import IntegrityError


@csrf_exempt  
def subscribe(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if not email:
            return JsonResponse({'message': 'Email is required'}, status=400)
        
        try:
            Subscriber.objects.create(email=email, is_active=True)
            return JsonResponse({'message': 'Subscription successful'}, status=200)
        except IntegrityError:
            return JsonResponse({'message': 'Email already subscribed'}, status=400)
def unsubscribe(request, email):
    try:
        subscriber = Subscriber.objects.get(email=email)
        subscriber.is_active = False
        subscriber.save()
        return render(request, 'newsletter/unsubscribe_success.html', {'email': email})
    except Subscriber.DoesNotExist:
        return render(request, 'newsletter/unsubscribe_fail.html', {'email': None})
