export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(agencia, cliente){
        this.cliente = cliente;
        this.agencia = agencia;
    }

}