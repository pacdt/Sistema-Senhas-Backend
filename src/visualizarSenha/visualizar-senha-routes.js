const express = require('express');
const { visualizarSenha } = require('./visualizar-senha-controller');

const router = express.Router()

router.get('/visualizar', (req, res) => {
    var senhas = visualizarSenha()
    return res.send(senhas)
})

module.exports = { router }