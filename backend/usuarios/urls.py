from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import Register, Perfil, EditarPerfil, Delete

urlpatterns = [
    path('register/', Register.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('perfil/', Perfil.as_view(), name='perfil'),
    path('editarPerfil/', EditarPerfil.as_view(), name='editarPerfil'),
    path('delete/', Delete.as_view(), name='delete')
]