// Importa a conexão com o banco de dados
const db = require('../db/conexao');

// Exibe o formulário de cadastro
exports.formulario = (req, res) => {
  res.sendFile('formSobre.html', { root: './public/views/admin' });
};

// Processa os dados enviados pelo formulário (insere ou atualiza)
exports.cadastrarSobre = (req, res) => {
  const { titulo, texto } = req.body;

  const selectSql = 'SELECT * FROM sobre LIMIT 1';
  db.get(selectSql, (err, row) => {
    if (err) {
      console.error('Erro ao verificar registro existente:', err);
      return res.send('Erro ao acessar o banco de dados.');
    }

    if (row) {
      // Atualiza o registro existente
      const updateSql = 'UPDATE sobre SET titulo = ?, texto = ? WHERE id = ?';
      db.run(updateSql, [titulo, texto, row.id], function (err) {
        if (err) {
          console.error('Erro ao atualizar:', err);
          return res.send('Erro ao atualizar o conteúdo.');
        }
        res.send('Texto "Quem Somos" atualizado com sucesso!');
      });
    } else {
      // Insere novo registro
      const insertSql = 'INSERT INTO sobre (titulo, texto) VALUES (?, ?)';
      db.run(insertSql, [titulo, texto], function (err) {
        if (err) {
          console.error('Erro ao inserir:', err);
          return res.send('Erro ao cadastrar.');
        }
        res.send('Texto "Quem Somos" cadastrado com sucesso!');
      });
    }
  });
};

// Exibe conteúdo do "sobre"
exports.exibirSobre = (req, res) => {
  db.all('SELECT * FROM sobre', (err, rows) => {
    if (err) {
      console.error('Erro ao buscar dados do sobre:', err.message);
      res.status(500).send('Erro ao carregar a página');
    } else {
      res.render('site/sobre', { sobre: rows });
    }
  });
};
