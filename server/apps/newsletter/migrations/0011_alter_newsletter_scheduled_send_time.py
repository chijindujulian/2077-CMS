# Generated by Django 5.0.8 on 2024-08-19 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0010_newsletter_last_sent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newsletter',
            name='scheduled_send_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
