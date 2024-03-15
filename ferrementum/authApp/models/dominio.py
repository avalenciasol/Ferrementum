from django.db import models

class Dominio(models.Model):
    # Suponiendo que solo tenga un nombre por ahora
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre