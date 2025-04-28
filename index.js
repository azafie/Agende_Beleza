const express = require('express');
const app = express();
const path = require('path');

// Serve arquivos estáticos da pasta 'public' (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  // Aqui estamos especificando o caminho correto para o arquivo index.html
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
