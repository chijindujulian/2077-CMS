from django.shortcuts import render
from notion_client import Client
import os
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def researchPage(request):
    notion = Client(auth=os.environ['NOTION_TOKEN'])
    data = notion.databases.query(os.environ.get('NOTION_DATABASE_ID'))
    return JsonResponse(data)