from django.db import models

class Rol(models.Model):
    # Suponiendo que solo tenga un nombre de rol ppr ahora
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre