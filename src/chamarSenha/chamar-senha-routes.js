const express = require('express');
const { chamarSenha, visualizarAtendimentos } = require('./chamar-senha-controller');

const router = express.Router()

router.get('/chamar:guiche', (req, res) => {
    const guiche = chamarSenha(req.params.guiche)
    res.send(guiche)
})

router.get('/atendimentos', (req, res) => {
    const atendimentos = visualizarAtendimentos()
    res.send(atendimentos)
})

module.exports = { router }