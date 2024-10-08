from uuid import uuid4

from django.db import models


# Create your models here.


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        abstract = True

        indexes = [
            models.Index(fields=['-created_at']),
        ]

        ordering = ("-created_at",)
