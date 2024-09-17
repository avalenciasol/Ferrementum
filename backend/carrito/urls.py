from django.urls import path
from .views import ProductoLista, CarritoView

urlpatterns = [
    path('productos/', ProductoLista.as_view(), name='producto-list'),
    path('carrito/', CarritoView.as_view(), name='carrito'),
    path('carrito/<int:item_id>/', CarritoView.as_view(), name='carrito-item'),
]