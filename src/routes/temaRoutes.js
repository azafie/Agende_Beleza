const express = require('express');
const router = express.Router();
const temaController = require('../controllers/temaController');

// Mostrar o formulário de tema
router.get('/tema', temaController.formulario);

// Cadastrar tema
router.post('/tema', temaController.cadastrarTema);

// Mostrar lista de temas
router.get('/temas', temaController.exibirTema);

module.exports = router;