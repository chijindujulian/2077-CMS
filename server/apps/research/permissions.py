from rest_framework.permissions import BasePermission, SAFE_METHODS
from rest_framework.exceptions import PermissionDenied

class ArticleUserWritePermission(BasePermission):
    """Custom permission to only allow authors of an article to edit it."""
    
    message = 'Editing articles is restricted to the author only.'

    def has_object_permission(self, request, view, obj):
        """Check if the user is the author of the article."""
        
        if request.method in SAFE_METHODS:
            return True
        if request.user not in obj.authors.values_list('user', flat=True):
            raise PermissionDenied('You do not have permission to edit this article.')
        return True
