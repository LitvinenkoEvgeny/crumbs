from django.contrib import admin
from .models import Item, ImageModel, Color
from .forms import ItemForm, ColorForm


# Register your models here.

class ImageModelAdmin(admin.TabularInline):
    model = ImageModel
    extra = 3


class ColorAdminInline(admin.TabularInline):
    model = Color.item.through
    form = ColorForm
    extra = 0


class ColorAdmin(admin.ModelAdmin):
    model = Color.item.through
    form = ColorForm


class ItemAdmin(admin.ModelAdmin):
    inlines = (ImageModelAdmin, ColorAdminInline)
    form = ItemForm


admin.site.register(Item, ItemAdmin)
admin.site.register(Color, ColorAdmin)
