const conexao = require('./src/conexao')
const { PagamentoFactory } = require('./src/pagamento')
const { PedidoBuilder } = require('./src/pedido')

const db = conexao.getInstance().getConexao();

const pagamentoPix = PagamentoFactory.criar('pix');
console.log(pagamentoPix);
pagamentoPix.processar(200);

const pagamentoCartao = PagamentoFactory.criar('cartao');
console.log(pagamentoCartao);
pagamentoPix.processar(100);


const pagamentoBoleto = PagamentoFactory.criar('boleto');
console.log(pagamentoBoleto);
pagamentoPix.processar(50);




const pedido = new PedidoBuilder().adicionarItem('Celular').adicionarItem('Capinha').adicionarItem('Abacaxi').setEndereco('Rua Rua 123').setPagamento('cartao').build();

console.log(pedido)
