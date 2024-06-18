from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100, db_index=True)
    descripcion = models.TextField(max_length=500)
    precio = models.DecimalField(default=0.0, decimal_places=2, max_digits=5)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)
