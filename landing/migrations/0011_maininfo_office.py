# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-03 18:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0010_auto_20171203_1816'),
    ]

    operations = [
        migrations.AddField(
            model_name='maininfo',
            name='office',
            field=models.CharField(blank=True, max_length=100, verbose_name='Офис'),
        ),
    ]
