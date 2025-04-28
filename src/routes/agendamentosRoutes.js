const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentosController');

// Exemplo de rota
router.get('/agendamentos', agendamentoController.listarAgendamentos);

module.exports = router;
