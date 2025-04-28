const sqlite3 = require('sqlite3').verbose(); // Importa o módulo sqlite3
const path = require('path'); // Para lidar com caminhos de arquivos

// Define o caminho completo para o banco de dados
const dbPath = path.join(__dirname, 'banco.db');

// Cria uma nova conexão com o banco de dados
const db = new sqlite3.Database(dbPath);

// Cria a tabela 'sobre' caso ela ainda não exista
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS sobre (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      descricao TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela sobre:', err.message);
    } else {
      console.log('Tabela "sobre" criada com sucesso.');
    }
  });
});

// Fecha a conexão com o banco após a criação
db.close();
