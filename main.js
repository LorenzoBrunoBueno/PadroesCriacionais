const express = require('express');

const conexao = require('./src/conexao')
const { PagamentoFactory } = require('./src/pagamento')
const { PedidoBuilder } = require('./src/pedido')

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.info(`Servidor rodando na porta: ${PORT}`)
})