from django.contrib.auth import get_user_model
from rest_framework import serializers

Usuario = get_user_model()

class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ('id', 'doc', 'tipo_doc', 'email', 'nombre', 'apellido','telefono', 'contrasena')
        extra_kwargs = {'contrasena': {'write_only': True}}

    def create(self, validated_data):
        contrasena = validated_data.pop('contrasena', None)
        usuario = super().create(validated_data)
        if contrasena:
            usuario.set_password(contrasena)
            usuario.save()
        return usuario
    
    def update(self, instance, validated_data):
        instance.nombre = validated_data.get('nombre', instance.nombre)
        instance.apellido = validated_data.get('apellido', instance.apellido)
        instance.telefono = validated_data.get('telefono', instance.telefono)

        contrasena = validated_data.get('contrasena')
        if contrasena: 
            instance.set_password(contrasena)

        instance.save()
        return instance