const db = require('./conexao');

// Cria a tabela "sobre"
db.run(`
  CREATE TABLE IF NOT EXISTS sobre (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    texto TEXT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error('Erro ao criar a tabela "sobre":', err.message);
  } else {
    console.log('Tabela "sobre" criada com sucesso.');
  }
});
