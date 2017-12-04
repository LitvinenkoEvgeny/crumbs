from django.shortcuts import render
from .models import Item, MainInfo


# Create your views here.

def index(request):
    items = Item.objects.all()
    company_info = MainInfo.objects.all()[0] if len(MainInfo.objects.all()) else []
    from_order = request.session.pop('from_order', False)
    return render(request, 'landing/index.html',
                  {'items': items, 'company_info': company_info, 'show_message': from_order})
