from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UsuarioAdmin(BaseUserManager):
    def create_user(self, email, contrasena, **extra_fields):
        if not email:
            raise ValueError('El correo debe ser proporcionado')
        email = self.normalize_email(email)
        usuario = self.model(email=email, **extra_fields)
        usuario.set_password(contrasena)
        usuario.save(using=self._db)
        return usuario
    
    def create_superuser(self, email, contrasena=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, contrasena, **extra_fields)

    
class Usuario(AbstractBaseUser, PermissionsMixin):
    nombre = models.CharField(max_length=255, null=False)
    apellido = models.CharField(max_length=255, null=False)
    tipo_doc = models.CharField(max_length=10, null=False)
    doc = models.CharField(max_length=50, null=False)
    email = models.EmailField(max_length=255,unique=True, null=False)
    telefono = models.CharField(max_length=50, null=False)

    objects = UsuarioAdmin()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nombre', 'tipo_doc', 'doc', 'telefono']

    def __str__(self):
        return self.email