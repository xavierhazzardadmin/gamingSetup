from django import forms
class PartListForm(forms.Form):
    item = forms.CharField(max_length = 100, label='Enter the Item Name Here')
    price = forms.DecimalField(label = 'Input Item Price Here')
    link = forms.URLField(label = 'Link the Part Here')
    img_link = forms.URLField(required = False, label = '(Optional) Input the URL of the Part Image Here')