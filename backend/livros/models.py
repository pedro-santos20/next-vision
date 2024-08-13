from django.db import models

class Livro(models.Model):
  titulo = models.CharField(max_length=255)
  autor = models.CharField(max_length=255)
  data_publicacao = models.DateField()
  copias_disponiveis = models.IntegerField()
  
  def __str__(self):
    return self.titulo

class Emprestimo(models.Model):
  livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
  usuario = models.CharField(max_length=255)
  data_emprestimo = models.DateField(auto_now_add=True)
  data_devolucao = models.DateField(null=True, blank=True)
  
  def __str__(self):
    return f"{self.usuario} - {self.livro.titulo}"