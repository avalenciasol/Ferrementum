from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from ..models import Producto, Carrito, ItemCarrito
from ..serializers import CarritoSerializer

class CarritoView(APIView):
    def get(self, request):
        carrito = get_object_or_404(Carrito, usuario=request.user)
        serializer = CarritoSerializer(carrito)
        return Response(serializer.data)

    def post(self, request):
        carrito, _ = Carrito.objects.get_or_create(usuario=request.user)
        producto = get_object_or_404(Producto, id=request.data.get('producto_id'))
        item, created = ItemCarrito.objects.get_or_create(carrito=carrito, producto=producto)
        if not created:
            item.cantidad += 1
            item.save()
        return Response({'message': 'Producto añadido al carrito'}, status=status.HTTP_200_OK)
    
    def put(self, request, item_id):
        item = get_object_or_404(ItemCarrito, id=item_id, carrito__usuario=request.user)
        item.cantidad = request.data.get('cantidad', item.cantidad)
        item.save()
        return Response({'message': 'Carrito actualizado'}, status=status.HTTP_200_OK)
    
    def delete(self, request, item_id):
        item = get_object_or_404(ItemCarrito, id=item_id, carrito__usuario=request.user)
        item.delete()
        return Response({'message': 'Producto eliminado del carrito'}, status=status.HTTP_204_NO_CONTENT)