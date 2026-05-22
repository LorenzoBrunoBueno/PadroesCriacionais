const express = require('express');

const conexao = require('./src/conexao')
const { PagamentoFactory } = require('./src/pagamento')
const { PedidoBuilder } = require('./src/pedido')

const PORT = 3000;

const app = express();

const db = conexao.getInstance();

function getPagamentos(req, res){
    return res.json();
}

function postPagamentos(req, res){
    const tipo = req.body.tipo
    if(!tipo){
        return 
    }
    const pagamentos = PagamentoFactory.criar(tipo);
    return res.json("Criado com sucesso!"); 
}

function getPedidos(req, res){
    return res.json();
}

function postPedidos(req, res){
    const {item, endereco, pagamento} = req.body
    const pedido = PedidoBuilder().adicionarItem(item).setEndereco(endereco).setPagamento(pagamento).build();
    return res.json("Pedido Criado com sucesso!");
}

app.post('/pagamentos', postPagaemntos(req, res));
app.post('/pedidos', postPedidos(req, res));
app.get('/pedidos', getPedidos(req, res));
app.get('/pagamentos', getPagamentos(req, res));


app.listen(PORT, () => {
    console.info(`Servidor rodando na porta: ${PORT}`)
})