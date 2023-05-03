const { senhas } = require('../data/senhas');

var senha = 1

const gerarSenha = () => {
    if (senhas.find(sn => sn === senha)) {
        senha = senha + 1
        senhas.push(senha)
    }else{
        senhas.push(senha)
        senha = senha + 1
    }
}

module.exports = {
    gerarSenha
}