from django.shortcuts import render
from django.http import HttpResponse
from .forms import PartListForm
from .models import Part
def home(request):
    if request.method == "POST":
        form = PartListForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            part = Part()
            part.item = data['item']
            part.price = data['price']
            part.link = data['link']
            part.image = data['img_link']
            part.save()
    else:
        form = PartListForm()
    context = {
        'parts': Part.objects.all(),
        'form': form
    }
    return render(request, 'part_list/index.html', context)