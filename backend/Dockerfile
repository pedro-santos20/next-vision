# /backend/Dockerfile

# Use uma imagem base do Python
FROM python:3.10

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo de requisitos para dentro do contêiner
COPY requirements.txt ./

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código da aplicação para dentro do contêiner
COPY . .

# Expondo a porta do Django
EXPOSE 8000

# Comando para iniciar o servidor
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
