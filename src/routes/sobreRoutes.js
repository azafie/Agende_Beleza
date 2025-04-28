const express = require('express');
const router = express.Router();
const sobreController = require('../controllers/sobreController');

// Rota GET para exibir o formulário
router.get('/admin/sobre', sobreController.formulario);

// Rota POST para receber os dados do formulário
router.post('/admin/sobre', sobreController.cadastrarSobre);

// Página pública "sobre"
router.get('/sobre', sobreController.exibirSobre);

module.exports = router;
