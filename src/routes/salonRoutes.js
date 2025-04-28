const express = require('express');
const router = express.Router();  // Usamos o Router do Express para criar rotas

// Exemplo de rota para a página inicial
router.get('/', (req, res) => {
  res.send('Bem-vindo ao salão!');
});

// Outra rota para um exemplo de agendamento
router.get('/agendamento', (req, res) => {
  res.send('Página de agendamentos');
});

module.exports = router;  // Exporta as rotas para o index.js
