from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad = models.IntegerField()
    imagen = models.ImageField(upload_to='productos/')
    categoria_id = models.IntegerField()  # Si tienes una relación, usa ForeignKey

    def __str__(self):
        return self.nombre
