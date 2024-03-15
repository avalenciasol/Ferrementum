from django.db import models

class TipoDoc(models.Model):
    # Suponiendo que solo tenga un tipo de documento por ahora
    tipo = models.CharField(max_length=50)

    def __str__(self):
        return self.tipo