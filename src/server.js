// server.js
const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const app = express();

// Configurações básicas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Se o diretório correto for 'site', pode alterar para 'views/site'
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'seuSegredoAqui',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Rota de login (página de login)
app.get('/login', (req, res) => {
  res.render('site/login');  // Aqui é a alteração para 'site/login'
});

// Rota para o formulário de login (exemplo de POST)
app.post('/login', (req, res) => {
  // Aqui você pode validar o login e redirecionar o usuário
  // Exemplo:
  // const { email, password } = req.body;
  // Se os dados estiverem corretos, redirecionar para o perfil ou outra página.
  res.redirect('/profile');
});

// Rota de login com Google
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// Rota de callback do Google após o login
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/profile');
  }
);

// Rota para o perfil do usuário após login
app.get('/profile', (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }
  res.send(`<h1>Bem-vindo, ${req.user.displayName}</h1><p><img src="${req.user.photos[0].value}" alt="foto do perfil" /></p>`);
});

// Rota de logout
app.get('/logout', (req, res) => {
  req.logout((err) => {
    res.redirect('/login');
  });
});

// Rota do painel administrativo para agendamentos
app.use('/admin', require('./routes/agendamentosRoutes'));   // Agendamentos
app.use('/', require('./routes/sobreRoutes'));               // Sobre
app.use('/admin', require('./routes/temaRoutes'));           // Temas

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
