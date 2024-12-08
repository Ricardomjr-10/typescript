"use strict";
//herança - classe que herda as mesmas caracteristicas da casse pai
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const conta1 = new Conta(123456789, 'Breno');
const conta2 = new ContaPF(1234567, 'Rafael');
const conta3 = new ContaPJ(123456, 'Zuleide');
console.log(conta1, conta2);
