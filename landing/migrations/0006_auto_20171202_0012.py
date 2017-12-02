# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-02 00:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0005_auto_20171201_2323'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='color',
            options={'verbose_name': 'Цвет', 'verbose_name_plural': 'Цвета'},
        ),
        migrations.AddField(
            model_name='item',
            name='width',
            field=models.CharField(default='от 10 мм', max_length=100, verbose_name='Толщина'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='color',
            name='item',
            field=models.ManyToManyField(related_name='colors', to='landing.Item'),
        ),
    ]