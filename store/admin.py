from django.contrib import admin
from .models import Order


# Register your models here.

class OrderAdmin(admin.ModelAdmin):
    model = Order
    readonly_fields = ('item', 'name', 'phone', 'email', 'description', 'image', 'date')
    list_filter = ('fullfilled', 'date')
    list_display = ('item', 'name', 'phone', 'fullfilled', 'date',)

admin.site.register(Order, OrderAdmin)
