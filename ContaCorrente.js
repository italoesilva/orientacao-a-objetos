import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    _saldo = 0;

//...código omitido

    constructor(agencia, cliente) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1
    }
//...