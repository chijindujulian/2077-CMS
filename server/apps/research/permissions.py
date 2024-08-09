from rest_framework.permissions import BasePermission, SAFE_METHODS
from rest_framework.exceptions import PermissionDenied

class ArticleUserWritePermission(BasePermission):
    message = 'Editing articles is restricted to the author only.'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        if obj.author != request.user:
            raise PermissionDenied('You do not have permission to edit this article.')
        return True
