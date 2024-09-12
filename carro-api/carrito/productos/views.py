from django.http import JsonResponse, HttpResponseNotFound
from .models import Producto
from django.views.decorators.csrf import csrf_exempt
from django.views import View
import json

class ProductListView(View):
    def get(self, request):
        productos = list(Producto.objects.values())
        return JsonResponse(productos, safe=False)

class ProductDetailView(View):
    def get(self, request, id):
        try:
            producto = Producto.objects.get(id=id)
            return JsonResponse({
                'id': producto.id,
                'nombre': producto.nombre,
                'descripcion': producto.descripcion,
                'precio': producto.precio,
                'cantidad': producto.cantidad,
                'imagen': producto.imagen,
                'categoria_id': producto.categoria_id
            })
        except Producto.DoesNotExist:
            return HttpResponseNotFound('Producto no encontrado')

    @csrf_exempt
    def post(self, request):
        data = json.loads(request.body)
        producto = Producto.objects.create(
            nombre=data['nombre'],
            descripcion=data['descripcion'],
            precio=data['precio'],
            cantidad=data['cantidad'],
            imagen=data['imagen'],
            categoria_id=data['categoria_id']
        )
        return JsonResponse({
            'id': producto.id,
            'nombre': producto.nombre,
            'descripcion': producto.descripcion,
            'precio': producto.precio,
            'cantidad': producto.cantidad,
            'imagen': producto.imagen,
            'categoria_id': producto.categoria_id
        }, status=201)

    @csrf_exempt
    def put(self, request, id):
        data = json.loads(request.body)
        try:
            producto = Producto.objects.get(id=id)
            producto.nombre = data['nombre']
            producto.descripcion = data['descripcion']
            producto.precio = data['precio']
            producto.cantidad = data['cantidad']
            producto.imagen = data['imagen']
            producto.categoria_id = data['categoria_id']
            producto.save()
            return JsonResponse({
                'id': producto.id,
                'nombre': producto.nombre,
                'descripcion': producto.descripcion,
                'precio': producto.precio,
                'cantidad': producto.cantidad,
                'imagen': producto.imagen,
                'categoria_id': producto.categoria_id
            })
        except Producto.DoesNotExist:
            return HttpResponseNotFound('Producto no encontrado')

    @csrf_exempt
    def delete(self, request, id):
        try:
            producto = Producto.objects.get(id=id)
            producto.delete()
            return JsonResponse({}, status=204)
        except Producto.DoesNotExist:
            return HttpResponseNotFound('Producto no encontrado')
