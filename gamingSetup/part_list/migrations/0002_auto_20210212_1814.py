# Generated by Django 3.1.6 on 2021-02-12 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('part_list', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='part',
            name='img_link',
            field=models.URLField(blank=True),
        ),
    ]
