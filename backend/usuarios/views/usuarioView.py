from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from ..serializers import UsuarioSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import UpdateAPIView

class Register(APIView):
    def post(self, request):
        user_serializer = UsuarioSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data, status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class Perfil(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UsuarioSerializer(user)
        return Response(serializer.data)
    
class EditarPerfil(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        user = request.user
        serializer = UsuarioSerializer(user, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()            
            return Response({
                'email': user.email,
                'telefono': user.telefono,
                'message': 'Perfil actualizado exitosamente',
            }, status=status.HTTP_200_OK)
        else:
            print("Validation errors:", serializer.errors)  
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class Delete(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        request.user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)