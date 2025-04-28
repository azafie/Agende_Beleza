// src/controllers/paginaController.js

exports.index = (req, res) => {
    res.render('index', { titulo: "Página Inicial", descricao: "Bem-vindo ao site!" });
};

exports.dashboard = (req, res) => {
    res.render('dashboard', { titulo: "Painel de Administração", descricao: "Gerencie os temas e configurações." });
};
