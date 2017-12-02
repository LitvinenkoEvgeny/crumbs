from django.shortcuts import get_list_or_404, render
from .models import Item


# Create your views here.

def index(request):
    items = get_list_or_404(Item)
    return render(request, 'landing/index.html', {'items': items})
