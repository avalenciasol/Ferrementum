from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()

class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ('id', 'doc', 'tipo_doc', 'email', 'nombre', 'apellido', 'telefono', 'password')
        extra_kwargs = {'password': {'write_only': True}} 

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = super().create(validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user
    
    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.telefono = validated_data.get('telefono', instance.telefono)

        password = validated_data.get('password', None)
        if password:
            instance.set_password(password)

        instance.save()
        return instance
    
