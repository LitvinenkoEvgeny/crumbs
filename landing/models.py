from django.db import models
from multiselectfield import MultiSelectField


# Create your models here.


class Item(models.Model):
    COLORS = (
        ('red', 'красный'),
        ('blue', 'синий'),
        ('green', 'зеленый'),
        ('darkblue', 'темно-синий'),
        ('orange', 'оранжевый'),
        ('gray', 'серый'),
        ('yellow', 'желтый'),
    )

    FOR_WHAT = (
        ('basket', 'Покрытия для футбольных полей'),
        ('child', 'Покрытия для деских площадок'),
        ('tennis', 'Покрытия для теннисных площадок'),
        ('volleyball', 'Покрытия для воллейбольных площадок'),
        ('sprint', 'Покрытия для беговых дорожек'),
        ('footsteps', 'Покрытия для пешеходных дорожек'),
        ('football', 'Покрытия для футбольных полей'),
        ('stable', 'Напольные покрытия для конюшен'),
    )

    name = models.CharField(max_length=250, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    price = models.IntegerField(verbose_name='Стоимость')
    usage = MultiSelectField(choices=FOR_WHAT, max_length=50, verbose_name='Использование')
    width = models.CharField(max_length=100, verbose_name='Толщина')

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return '{} - {}р.'.format(self.name, self.price)

    @staticmethod
    def get_choice_description(choice):
        return dict(Item.FOR_WHAT)[choice]


class ImageModel(models.Model):
    main_image = models.ImageField(upload_to='admin', null=False)
    image = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='images')

    class Meta:
        verbose_name = 'Картинка'
        verbose_name_plural = 'Картинки'
        ordering = ['pk']

    def __str__(self):
        return self.image.name


class Color(models.Model):
    class Meta:
        verbose_name = 'Цвет'
        verbose_name_plural = 'Цвета'

    item = models.ManyToManyField(Item, related_name='colors')
    name = models.CharField(verbose_name='Цвет', max_length=50)
    hex = models.CharField(verbose_name='hex представление', max_length=30)

    def __str__(self):
        return '{}'.format(self.name)
