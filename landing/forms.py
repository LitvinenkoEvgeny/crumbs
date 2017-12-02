from django import forms
from .models import Item, Color


class ItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = '__all__'

    # colors = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple(), choices=Item.COLORS)
    usage = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple(), choices=Item.FOR_WHAT)


class ColorForm(forms.ModelForm):
    class Meta:
        model = Color
        fields = '__all__'
        widgets = {
            'hex': forms.TextInput(attrs={'type': 'color'})
        }
