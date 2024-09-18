from django.db import models
from django.conf import settings

class Carrito(models.Model):
    usuario = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f'Carrito de {self.usuario.email}'
