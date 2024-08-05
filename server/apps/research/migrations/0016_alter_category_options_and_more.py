# Generated by Django 5.0.7 on 2024-08-03 23:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('research', '0015_article_updated_at_alter_article_created_at_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name_plural': 'Categories'},
        ),
        migrations.RemoveIndex(
            model_name='category',
            name='research_ca_created_de4c2d_idx',
        ),
        migrations.AlterField(
            model_name='article',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='articles', to='research.category'),
        ),
    ]
