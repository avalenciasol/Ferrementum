from django.urls import path
from .views import ProductListView, ProductDetailView

urlpatterns = [
    path('productos/', ProductListView.as_view(), name='product-list'),
    path('productos/<int:id>/', ProductDetailView.as_view(), name='product-detail'),
]
