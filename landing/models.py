from django.db import models
from multiselectfield import MultiSelectField
from django.core.exceptions import ValidationError


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
        ('basket', 'Покрытия для баскетбольных полей'),
        ('child', 'Покрытия для деских площадок'),
        ('tennis', 'Покрытия для теннисных площадок'),
        ('volleyball', 'Покрытия для воллейбольных площадок'),
        ('sprint', 'Покрытия для беговых дорожек'),
        ('footsteps', 'Покрытия для пешеходных дорожек'),
        ('football', 'Покрытия для футбольных полей'),
        ('stable', 'Напольные покрытия для конюшен'),
    )

    name = models.CharField(max_length=250, verbose_name='Название')
    description = models.TextField(verbose_name='Описание', blank=True)
    price = models.IntegerField(verbose_name='Стоимость')
    usage = MultiSelectField(choices=FOR_WHAT, max_length=300, verbose_name='Использование', blank=True)
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
    little_image = models.ImageField(upload_to='admin', null=False, verbose_name='маленькая картинка для превью')
    big_image = models.ImageField(upload_to='admin', null=False, verbose_name='большая картинка внутри слайдера')
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='images')

    class Meta:
        verbose_name = 'Картинка'
        verbose_name_plural = 'Картинки'
        ordering = ['pk']

    def __str__(self):
        return self.item.name


class Color(models.Model):
    class Meta:
        verbose_name = 'Цвет'
        verbose_name_plural = 'Цвета'

    item = models.ManyToManyField(Item, related_name='colors', blank=True)
    name = models.CharField(verbose_name='Цвет', max_length=50)
    hex = models.CharField(verbose_name='hex представление', max_length=30)

    def __str__(self):
        return '{}'.format(self.name)


class MainInfo(models.Model):
    class Meta:
        verbose_name = 'Основная информация о компании'
        verbose_name_plural = 'Основная информация о компании'

    title = models.CharField(blank=False, verbose_name='title документа', max_length=100)
    name = models.CharField(blank=False, verbose_name='Название компании', max_length=200)
    description = models.TextField(verbose_name='SEO description tag',
                                   help_text='Короткое (500 символов) описание\
                                    сайта для улучшения взаимодействия с поисковыми движками')
    meta_keywords = models.TextField(verbose_name='SEO keywords',
                                     help_text='Ключевые слова и поисковые фразы для\
                                      улучшения взаимодействия с поисковыми движками')
    country = models.CharField(max_length=80, verbose_name='Страна', blank=False)
    state = models.CharField(max_length=80, verbose_name='Область', help_text='Архангельская/Московская', blank=True)
    city = models.CharField(max_length=80, verbose_name='Город', blank=True)
    street = models.CharField(max_length=150, verbose_name='Улица', blank=False)
    building = models.CharField(max_length=50, verbose_name='Дом №', blank=True)
    office = models.CharField(max_length=100, verbose_name='Офис', blank=True)
    email = models.EmailField(verbose_name='Email', blank=False)

    def __str__(self):
        return '{}'.format(self.name)

    def save(self, *args, **kwargs):
        if MainInfo.objects.exists() and not self.pk:
            raise ValidationError('Вы можете создать только одну запись с основной информацией,\
             но можете редактировать существующую')
        return super(MainInfo, self).save(*args, **kwargs)


class Phone(models.Model):
    class Meta:
        verbose_name = 'Телефон'
        verbose_name_plural = 'Телефоны'

    main_info = models.ForeignKey(MainInfo, on_delete=models.CASCADE, related_name='phones')
    number = models.CharField(max_length=50, verbose_name='Номер телефона')
