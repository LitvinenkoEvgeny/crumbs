from django.contrib import admin
from .models import Item, ImageModel, Color, MainInfo, Phone
from .forms import ItemForm, ColorForm


# Register your models here.

class ImageModelAdmin(admin.TabularInline):
    model = ImageModel
    extra = 0


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


class PhoneAdminInline(admin.TabularInline):
    model = Phone
    extra = 0


class MainInfoAdmin(admin.ModelAdmin):
    inlines = (PhoneAdminInline,)
    model = MainInfo
    fieldsets = (
        ('Основная', {
            'fields': ('title', 'name',)
        }),
        ('SEO', {
            'fields': ('description', 'meta_keywords',)
        }),
        ('Адрес', {
            'fields': ('country', 'state', 'city', 'street', 'building', 'office',),
        }),
        ('Контактная Информация', {
            'fields': ('email',)
        }),
    )


admin.site.register(Item, ItemAdmin)
admin.site.register(Color, ColorAdmin)
admin.site.register(MainInfo, MainInfoAdmin)
