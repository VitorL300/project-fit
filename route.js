const path = require('node:path'); 
const express = require('express');
const { Router } = require('express');
const router = Router();
const loginController = require('./src/controllers/loginController');

router.use(express.urlencoded({ extended: true }));

// CORREÇÃO: Adicionamos o '/public' como primeiro parâmetro aqui
router.use('/public', express.static(path.join(__dirname, 'public')));

// --- Rotas GET --- //
router.get('/', (req, res) =>  { 
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'))
});

router.get('/login', loginController.renderLogin);
router.get('/aluno', loginController.renderAluno);

router.get('/curso-corpo', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'curso-corpo.html'))
})

router.get('/curso-express', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'curso-express.html'))
})

router.get('/curso-forca', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'curso-forca.html'))
})

router.get('/curso-iniciante', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'curso-iniciante.html'))
})

router.get('/curso-queima', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'curso-queima.html'))
})

// --- ROTAS DE AÇÃO (POST) ---

router.post('/register', loginController.registerUser);
router.post('/login', loginController.loginUser);

module.exports = router;