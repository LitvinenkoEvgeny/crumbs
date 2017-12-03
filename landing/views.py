from django.shortcuts import get_list_or_404, render
from .models import Item


# Create your views here.

def index(request):
    items = get_list_or_404(Item)
    from_order = request.session.pop('from_order', False)
    return render(request, 'landing/index.html', {'items': items, 'show_message': from_order})
