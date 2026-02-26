const path = require('node:path');
const loginModel = require('../models/loginModel');

const loginController = {

    // --- Funções GET --- //

    //Exibir página de login 
    renderLogin: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'login.html'))
    },

    //Exibir página aluno
    renderAluno: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'aluno.html'))
    },


    // --- Funções POST --- //

    //Processa o registro
    registerUser: (req, res) => {
        const { username, email, password } = req.body;
        
        const userExists = loginModel.findByEmail(email);

        if (userExists) {
            return res.send('<h1>Erro: Este email já está cadastrado!</h1><a href="/login">Voltar</a>');
        }

        loginModel.create({ username, email, password });

        console.log("--- Usuário Criado ---");
        console.log(loginModel.getAll());

        res.redirect('/login');
    },

    // Processa o login
    loginUser: (req, res) => {
        const { email, password } = req.body;

        const user = loginModel.findByEmail(email);

        if (!user || user.password !== password) {
            return res.send('<h1>Erro: Email ou senha incorretos!</h1><a href="/login">Tentar de novo</a>');
        }

        console.log(`O usuário ${user.username} acabou de logar!`);
        res.redirect('/aluno');
    }
};

module.exports = loginController;