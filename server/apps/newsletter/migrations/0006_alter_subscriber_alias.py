# Generated by Django 5.0.8 on 2024-08-19 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0005_subscriber_alias'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscriber',
            name='alias',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]
