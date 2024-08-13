from rest_framework import serializers
from .models import Livro, Emprestimo

class LivroSerializer(serializers.ModelSerializer):
  class Meta:
    model = Livro
    fields = '__all__'
    
class EmprestimoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Emprestimo
    fields = '__all__'