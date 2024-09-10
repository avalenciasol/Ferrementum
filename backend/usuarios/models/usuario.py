from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UsuarioAdmin(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El correo debe ser proporcionado')
        email = self.normalize_email(email)
        usuario = self.model(email=email, **extra_fields)
        usuario.set_password(password)
        usuario.save(using=self._db)
        return usuario
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

    
class Usuario(AbstractBaseUser, PermissionsMixin):
    doc = models.CharField(max_length=255, null=False, unique=True)
    tipo_doc = models.CharField(max_length=20, null=False)
    email = models.EmailField(unique=True)
    nombre= models.CharField(max_length=255, null=False)
    apellido = models.CharField(max_length=255, null=False)
    telefono = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UsuarioAdmin()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['doc', 'tipo_doc', 'nombre', 'apellido', 'telefono']

    def __str__(self):
        return self.email