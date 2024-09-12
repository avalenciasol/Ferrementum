from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=0)  # Sin decimales según tu tabla
    cantidad = models.IntegerField()
    imagen = models.CharField(max_length=2083)  # Usamos CharField porque es un varchar en tu tabla
    categoria_id = models.IntegerField()  # Si tienes una FK, podría ser un ForeignKey

    def __str__(self):
        return self.nombre
