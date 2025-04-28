// src/controllers/temaController.js

const db = require('../db/conexao');

// Exibe o formulário de cadastro de tema
exports.formulario = (req, res) => {
  res.sendFile('formTema.html', { root: './public/views/admin' });
};

// Processa o cadastro de um novo tema
exports.cadastrarTema = (req, res) => {
  const { nome, cor_fundo, cor_texto, cor_titulo, fonte_texto, fonte_titulo, cor_clip_path } = req.body;

  const sql = 'INSERT INTO temas (nome, cor_fundo, cor_texto, cor_titulo, fonte_texto, fonte_titulo, cor_clip_path) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.run(sql, [nome, cor_fundo, cor_texto, cor_titulo, fonte_texto, fonte_titulo, cor_clip_path], function (err) {
    if (err) {
      console.error('Erro ao cadastrar tema:', err.message);
      return res.send('Erro ao cadastrar tema.');
    }
    res.send('Tema cadastrado com sucesso!');
  });
};

// Exibe os temas cadastrados na área admin
exports.exibirTema = (req, res) => {
  db.all('SELECT * FROM temas', (err, rows) => {
    if (err) {
      console.error('Erro ao buscar temas:', err.message);
      return res.status(500).send('Erro ao carregar temas.');
    }
    res.render('admin/temas', { temas: rows });
  });
};
