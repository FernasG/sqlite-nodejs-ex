const express = require('express');
const db = require('./database');

const app = express();

app.listen(3000, () => { console.log('Servidor rodando na porta 3000.') })