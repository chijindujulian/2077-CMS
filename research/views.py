from django.shortcuts import render
from notion_client import Client
import os, json, requests
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def researchPage(request):
    notion = Client(auth=os.environ['NOTION_TOKEN'])
    data = notion.databases.query(os.environ.get('NOTION_DATABASE_ID'),
    filter={
        "property": "Status",
        "status": {
            "equals": "Done"
        }
    })
    with open('data.json', 'w') as f:
        json.dump(data, f, indent=4)
    #return JsonResponse(data)
    #print(data)
    print("Printing list of Authors")
    for result in data['results']:
        authors = result['properties']['Author']['multi_select']
        for author in authors:
            print(author['name'])
    data_to_render = data['results']
    
    print("Printing list of Titles")
    for result1 in data_to_render:
        titles = result1['properties']['Content Title']['title']
        for title in titles:
            print(title['plain_text'])                
 
    return render(request, 'blogPostCard.html', {'data_to_render': data_to_render})