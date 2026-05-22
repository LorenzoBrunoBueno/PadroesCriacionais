class Pedido {
  constructor({ itens, endereco, pagamento }) {
    this.itens     = itens;
    this.endereco  = endereco;
    this.pagamento = pagamento;
  }
}

class PedidoBuilder {
  #itens     = [];
  #endereco  = null;
  #pagamento = null;

  adicionarItem(item) {
    this.#itens.push(item);
    return this;
  }

  setEndereco(endereco) {
    this.#endereco = endereco;
    return this;
  }

  setPagamento(pagamento) {
    this.#pagamento = pagamento;
    return this;
  }

  build() {
    if (this.#itens.length === 0)
      throw new Error('Pedido deve ter ao menos um item');
    if (!this.#endereco)
      throw new Error('Endereço de entrega é obrigatório');
    if (!this.#pagamento)
      throw new Error('Forma de pagamento é obrigatória');

    return new Pedido({
      itens:     this.#itens,
      endereco:  this.#endereco,
      pagamento: this.#pagamento,
    });
  }
}

module.exports = { PedidoBuilder };