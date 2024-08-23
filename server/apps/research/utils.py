from django.http import HttpResponse
import requests

def astro_proxy(request):
    response = requests.get('http://localhost:4321' + request.path)
    return HttpResponse(response.content, content_type=response.headers['Content-Type'])