const path = require('path');
const sqlite3 = require('sqlite3').verbose();

class Conexao {
  static #instancia = null;

  #conexao;

  constructor() {
    if (Conexao.#instancia) {
      return Conexao.#instancia;
    }

    const caminhoBanco = path.join(__dirname, 'ecommerce.sqlite');

    this.#conexao = new sqlite3.Database(caminhoBanco, (erro) => {
      if (erro) {
        console.error('Erro ao conectar no banco SQLite:', erro.message);
        return;
      }

      console.log('Conectado ao banco SQLite.');
    });

    this.#criarTabelas();
    Conexao.#instancia = this;
  }

  static getInstance() {
    if (!Conexao.#instancia) {
      Conexao.#instancia = new Conexao();
    }

    return Conexao.#instancia;
  }

  getConexao() {
    return this.#conexao;
  }

  fechar() {
    this.#conexao.close((erro) => {
      if (erro) {
        console.error('Erro ao fechar conexao com SQLite:', erro.message);
        return;
      }

      console.log('Conexao com SQLite encerrada.');
    });
  }

  #criarTabelas() {
    this.#conexao.serialize(() => {
      this.#conexao.run('PRAGMA foreign_keys = ON');

      this.#conexao.run(`
        CREATE TABLE IF NOT EXISTS pedidos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          itens TEXT NOT NULL,
          endereco TEXT NOT NULL,
          pagamento_tipo TEXT NOT NULL,
          total REAL DEFAULT 0,
          criado_em TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `);

      this.#conexao.run(`
        CREATE TABLE IF NOT EXISTS pagamentos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          pedido_id INTEGER,
          tipo TEXT NOT NULL,
          valor REAL NOT NULL,
          status TEXT NOT NULL DEFAULT 'pendente',
          criado_em TEXT DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (pedido_id) REFERENCES pedidos (id)
        )
      `);
    });
  }
}

module.exports = Conexao;
