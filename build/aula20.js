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
const conta1 = new Conta(123456789, 'Breno');
