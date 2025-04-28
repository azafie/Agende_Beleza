// Importa o módulo sqlite3 e ativa o modo "verbose" para mostrar mensagens de log no console
const sqlite3 = require('sqlite3').verbose();

// Cria uma instância do banco de dados SQLite (ou cria o arquivo se não existir)
const db = new sqlite3.Database('./src/db/database.db');

// Comando SQL para criar a tabela de temas
const sql = `
  CREATE TABLE IF NOT EXISTS temas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,        -- ID único para cada tema
    nome TEXT NOT NULL,                          -- Nome do tema (ex: Dark, Verão, Natal)
    cor_fundo TEXT NOT NULL,                     -- Cor de fundo geral do site
    cor_texto TEXT NOT NULL,                     -- Cor dos textos (parágrafos)
    cor_titulo TEXT NOT NULL,                    -- Cor dos títulos (ex: h1, h2)
    fonte_texto TEXT NOT NULL,                   -- Fonte usada nos textos
    fonte_titulo TEXT NOT NULL,                  -- Fonte usada nos títulos
    cor_clip_path TEXT NOT NULL                  -- Cor dos elementos com clip-path
  );
`;

// Executa o comando de criação da tabela
db.run(sql, (err) => {
  if (err) {
    console.error('Erro ao criar tabela:', err.message);
  } else {
    console.log('Tabela "temas" criada com sucesso!');
  }

  // Fecha a conexão com o banco de dados
  db.close();
});
