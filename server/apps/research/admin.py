from django.contrib import admin

# Import admin classes from separate files
from .admin.category_admin import CategoryAdmin
from .admin.author_admin import AuthorAdmin
from .admin.article_admin import ArticleAdmin

# Register admin classes
admin.site.register(CategoryAdmin)
admin.site.register(AuthorAdmin)
admin.site.register(ArticleAdmin)
