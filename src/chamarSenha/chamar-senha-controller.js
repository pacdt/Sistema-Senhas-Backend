const { senhas } = require('../data/senhas');
const { atendendo } = require('../data/atendimento');

const chamarSenha = (guiche) => {
    var senha = senhas[0]
    atendendo.push({ guiche, senha: senhas[0] })
    senhas.shift()
    return { guiche, senha }
}

const visualizarAtendimentos = () => {
    return atendendo
}

module.exports = { chamarSenha, visualizarAtendimentos }
