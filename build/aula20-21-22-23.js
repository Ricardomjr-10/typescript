"use strict";
//herança - classe que herda as mesmas caracteristicas da casse pai
//acessando clase privada
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    info() {
        console.log(`titular: ${this.titular}`);
        console.log(`numero: ${this.numero}`);
        console.log('------------------------');
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
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('------------------------');
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
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('------------------------');
    }
}
const conta1 = new Conta('Breno');
const conta2 = new ContaPF(1231212, 'Rafael');
const conta3 = new ContaPJ(123124, 'Zuleide');
// console.log(conta1, conta2)
//conta1.info()
conta2.info();
conta3.info();
