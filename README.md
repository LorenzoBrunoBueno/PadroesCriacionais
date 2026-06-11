Alunos: Lorenzo Bruno Bueno

Tarefa 1: Singleton

Por que faz sentido usar o Singleton aqui? Quais problemas ele resolve nesse contexto?
Abrir uma nova conexão com o banco de dados em toda chamada do construtor gera um maior custo de tempo e recursos, além de que, utilizar uma única instância torna a o uso da conexão na aplicação consistente e evita o esgotamento de conexões com o banco de dados. O Singleton resolve esses problemas mantendo a conexão centralizada e única. 

Tarefa 2: Factory Method

O que acontece quando precisamos adicionar uma nova forma de pagamento (ex: criptomoedas)? A sua solução facilita isso?
Precisamos apenas adicionar uma nova subclasse com sua própria lógica e adiciona-lá aos possíveis tipos do método Factory. A solução facilita adição de novas formas de pagamento, centralizando a construção dos múltiplos tipos de pagamento.

Tarefa 3: Builder

Por que Builder é mais adequado aqui do que um construtor com muitos parâmetros?
O Builder melhora a legibilidade do código, através da nomenclatura descritiva dos métodos (exemplo: .setNome()) e evita objetos com muitos parâmetros 
