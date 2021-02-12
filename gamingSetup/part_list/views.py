from django.shortcuts import render
from django.http import HttpResponse
from .forms import PartListForm

def home(request):
    form = PartListForm()
    return render(request, 'part_list/index.html', {"form": form})