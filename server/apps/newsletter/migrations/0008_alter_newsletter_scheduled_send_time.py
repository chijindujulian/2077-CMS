# Generated by Django 5.0.8 on 2024-08-19 21:31

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0007_remove_subscriber_alias'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newsletter',
            name='scheduled_send_time',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
    ]
