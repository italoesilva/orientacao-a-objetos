const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309)
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);  