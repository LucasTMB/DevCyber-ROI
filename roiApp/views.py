from django.shortcuts import render

def index(request):
    return render(request, 'roiApp/index.html')

def calculadora(request):
    return render(request, 'roiApp/calculadora.html')