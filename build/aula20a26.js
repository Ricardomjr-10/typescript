"use strict";
//herança - classe que herda as mesmas caracteristicas da casse pai
//acessando clase privada
//setter e getter - setter setar o valor da propriedade, getter obter o valor da propriedade
//classe abstrata - classe que nao pode ser instanciada
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    info() {
        console.log(`titular: ${this.titular}`);
        console.log(`numero: ${this.numero}`);
        console.log('------------------------');
    }
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldoconta) {
        this.saldoConta = saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log('valor invalido');
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log('valor invalido');
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldo -= valor;
        }
        else {
            console.log('saldo insuficiente');
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada:${titular}`); // atraves do proteced permiti o acesso
    }
    info() {
        console.log('tipo: PF');
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('------------------------');
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log('deposito não permitido');
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log('saque não permitido, limite de saque R$ 1000');
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada:${titular}`); // ateaves do proteced permiti o acesso
    }
    info() {
        console.log('tipo: PJ');
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('------------------------');
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log('deposito não permitido');
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log('saque não permitido, limite de saque R$ 10000');
        }
        else {
            super.saque(valor);
        }
    }
}
//const conta1 = new Conta('Breno')// nao pode instanciar uma classe abstrata
const conta2 = new ContaPF(1231212, 'Rafael');
const conta3 = new ContaPJ(123124, 'Zuleide');
// console.log(conta1, conta2)
//conta1.info()
// conta2.info()
// conta3.info()
conta2.deposito(800);
conta2.deposito(200);
conta2.deposito(1000);
conta2.saque(1000);
// conta2.saque(1000)
// conta2.saque(10)
//conta2.saldo = 300 // valr setado diretamente
console.log(conta2.saldo); //nao precisa dos paraenteses, por causa do get
// conta3.deposito(10000)
// conta3.deposito(10000)
// conta3.deposito(10000)
// conta3.deposito(10001)
// console.log(conta3.saldo())
