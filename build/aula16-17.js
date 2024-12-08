"use strict";
//P.O.O - classes
class Computador {
    nome = 'computador 1';
    ram = 0;
    cpu = 0;
    ligado = true;
}
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();
comp1.nome = 'Rapidao';
comp2.nome = 'Carao';
comp3.nome = 'Gamer';
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
