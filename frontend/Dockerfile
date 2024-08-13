# /frontend/Dockerfile

# Use uma imagem base do Node.js
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação para dentro do contêiner
COPY . .

# Expondo a porta do React
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
