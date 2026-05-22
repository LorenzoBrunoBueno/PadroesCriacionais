class Pagamento {
  processar(valor) {
    throw new Error('processar() deve ser implementado');
  }
}

class CartaoCredito extends Pagamento {
  processar(valor) { console.log(`Cartão: R$ ${valor}`); }
}

class Pix extends Pagamento {
  processar(valor) { console.log(`PIX: R$ ${valor}`); }
}

class Boleto extends Pagamento {
  processar(valor) { console.log(`Boleto: R$ ${valor}`); }
}

class PagamentoFactory {
  static criar(tipo) {
    const tipos = {
      cartao: CartaoCredito,
      pix:    Pix,
      boleto: Boleto,
    };
    const Classe = tipos[tipo.toLowerCase()];
    if (!Classe) throw new Error(`Tipo desconhecido: ${tipo}`);
    return new Classe();
  }
}

module.exports = { PagamentoFactory };