const http = require('node:http');
const express = require('express');

const { senhaRoute } = require('./src/gerarSenha/index');
const { visualizarRoute } = require('./src/visualizarSenha/index');
const { chamarRoute } = require('./src/chamarSenha/index');

const app = express();

app.use(senhaRoute)
app.use(visualizarRoute)
app.use(chamarRoute)

http.createServer(null, app).listen(8080, () => console.log('Servidor rodando'))
