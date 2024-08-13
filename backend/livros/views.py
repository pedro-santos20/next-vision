from rest_framework import viewsets
from .models import Livro, Emprestimo
from .serializers import LivroSerializer, EmprestimoSerializer
from rest_framework.permissions import IsAuthenticated

class LivroViewSet(viewsets.ModelViewSet):
  queryset = Livro.objects.all()
  serializer_class = LivroSerializer
  
class EmprestimoViewSet(viewsets.ModelViewSet):
  queryset = Emprestimo.objects.all()
  serializer_class = EmprestimoSerializer
  permission_classes = [IsAuthenticated]