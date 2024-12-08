"use strict";
//P.O.O - classes
class Computador {
    nome = 'computador 1';
    ram = 0;
    cpu = 0;
    ligado = true;
    constructor(nome) {
        this.nome = nome;
        console.log('objeto criado');
    }
}
//instaciar uma classe
const comp1 = new Computador("comp1");
const comp2 = new Computador("comp2");
const comp3 = new Computador("comp3");
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
