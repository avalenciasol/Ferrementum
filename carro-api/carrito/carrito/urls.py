# carrito/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.http import HttpResponse

# Configuración de Swagger con drf-yasg
schema_view = get_schema_view(
    openapi.Info(
        title="Ferrementum API",
        default_version='v1',
        description="Documentación de la API de Ferrementum",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@ferrementum.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

# Función para mostrar un mensaje de bienvenida en la raíz
def home(request):
    return HttpResponse("Bienvenido a la API de Ferrementum")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('productos.urls')),  # Incluye las URLs de la aplicación productos
    
    # Rutas para la documentación Swagger y Redoc
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    
    # Ruta para la página de bienvenida en la raíz
    path('', home),
]
