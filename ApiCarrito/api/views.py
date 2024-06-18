# from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductoSerializer 
from .models import Producto

# Create your views here.
class ProductoViewSet(viewsets.ModelViewSet):
    queryset=Producto.objects.all()
    serializer_class = ProductoSerializer 