from django.db import models
from landing.models import Item


# Create your models here.

class Order(models.Model):
    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
        ordering = ('-pk',)

    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='orders', verbose_name='Товар')
    fullfilled = models.BooleanField(default=False, verbose_name='Выполнен')
    date = models.DateField(auto_now=True, verbose_name='Дата')
    name = models.CharField(max_length=300, verbose_name='Заказчик')
    phone = models.CharField(max_length=200, verbose_name='Телефон')
    email = models.EmailField(verbose_name='Email')
    description = models.TextField(verbose_name='Описание')
    image = models.ImageField(verbose_name='Тех задание/План', upload_to='Technical')

    def __str__(self):
        return '{} - {} - {}'.format(self.item.name, self.name, self.email)
