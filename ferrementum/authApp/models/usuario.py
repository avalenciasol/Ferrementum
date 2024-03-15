from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone

from .dominio import Dominio
from .tipodoc import TipoDoc
from .rol import Rol


class UsuarioManager(BaseUserManager):
    def create_user(self, Correo, password=None, **extra_fields):
        if not Correo:
            raise ValueError('El correo electrónico es obligatorio')
        Correo = self.normalize_email(Correo)
        user = self.model(Correo=Correo, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, Correo, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(Correo, password, **extra_fields)

class Usuario(AbstractBaseUser, PermissionsMixin):
    UsuarioID = models.AutoField(primary_key=True)
    Num_doc = models.CharField(max_length=10)
    Nombre = models.CharField(max_length=45)
    Apellido = models.CharField(max_length=45)
    password = models.CharField(max_length=45)  # Django espera este campo para manejar la contraseña
    Correo = models.EmailField(unique=True)
    Telefono = models.CharField(max_length=45)
    Fecha_reg = models.DateTimeField(default=timezone.now)
    DominioID = models.ForeignKey(Dominio, on_delete=models.PROTECT) 
    TipoDocID = models.ForeignKey(TipoDoc, on_delete=models.PROTECT)  
    RolID = models.ForeignKey(Rol, on_delete=models.PROTECT)  
    # ServicioID = models.IntegerField() 

    objects = UsuarioManager()

    USERNAME_FIELD = 'Correo'
    REQUIRED_FIELDS = ['Num_doc', 'Nombre', 'Apellido']

    def __str__(self):
        return self.Correo
