from rest_framework import generics
from .models import Producto
from .serializers import ProductoSerializer

# Listar y crear productos
class ProductoListView(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

# Obtener, actualizar y eliminar un producto específico
class ProductoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
