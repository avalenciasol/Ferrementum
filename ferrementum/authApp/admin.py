from django.contrib import admin

from .models import Usuario, Dominio, TipoDoc, Rol

admin.site.register(Usuario)
admin.site.register(Dominio)
admin.site.register(TipoDoc)
admin.site.register(Rol)