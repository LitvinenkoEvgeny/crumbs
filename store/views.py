from django.shortcuts import reverse, redirect
from django.http import HttpResponseRedirect
from store.models import Order
from landing.models import Item


# Create your views here.
def handle_uploaded_file(f):
    with open('file.jpeg', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)


def order(request, pk):
    related_item = Item.objects.get(pk=pk)
    if request.FILES:
        image = request.FILES['image']
    else:
        image = None

    new_order = Order(item=related_item, description=request.POST['placename'], email=request.POST['email'],
                      phone=request.POST['phone'], name=request.POST['name'], image=image)
    new_order.save()
    request.session['from_order'] = True
    return redirect(reverse('landing:index'))
