from django import forms

class SubscribeForm(forms.Form):
    email = forms.EmailField(label='Enter your email', required=True)
