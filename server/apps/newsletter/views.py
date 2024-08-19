from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Subscriber
from .forms import SubscribeForm
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt  # Only use this if you can't handle CSRF token in your frontend
def subscribe(request):
    if request.method == 'POST':
        form = SubscribeForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            Subscriber.objects.create(email=email)
            return HttpResponse('You have successfully subscribed.')
    else:
        form = SubscribeForm()

    return render(request, 'newsletter/subscribe.html', {'form': form})

def unsubscribe(request, email):
    try:
        subscriber = Subscriber.objects.get(email=email)
        subscriber.is_active = False
        subscriber.save()
        return render(request, 'newsletter/unsubscribe_success.html', {'email': email})
    except Subscriber.DoesNotExist:
        return render(request, 'newsletter/unsubscribe_fail.html', {'email': None})
