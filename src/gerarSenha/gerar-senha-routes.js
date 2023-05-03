const express = require('express');
const { gerarSenha } = require('../gerarSenha/gerar-senha-controller');
const { senhas } = require('../data/senhas');

const router = express.Router()

router.get('/', (req, res) => {
    gerarSenha()
    return res.send({ senha: senhas[senhas.length - 1] })
})

module.exports = { router }