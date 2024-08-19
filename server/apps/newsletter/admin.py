from django.contrib import admin, messages
from .models import Newsletter, Subscriber
from .tasks import send_newsletter_via_email

@admin.action(description='Send selected newsletters')
def send_selected_newsletters(modeladmin, request, queryset):
    for newsletter in queryset:
        send_newsletter_via_email.delay()
        
    messages.success(request, f"{queryset.count()} newsletters have been scheduled for sending.")
    

@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ['subject', 'is_sent', 'scheduled_send_time', 'last_sent']
    readonly_fields = ['last_sent']
    actions = [send_selected_newsletters]
    
    def save_model(self, request, obj, form, change):
        if change:  # If editing an existing object
            obj.is_sent = False  # Set 'is_sent' to False when editing
        super().save_model(request, obj, form, change)

@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = ['email', 'is_active', 'subscribed_at']
    list_filter = ['is_active']
    search_fields = ['email']
        
