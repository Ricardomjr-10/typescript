//P.O.O - classes
class Computador {
    nome: string = 'computador 1'
    ram: number=0
    cpu: number=0
    ligado: boolean= true
}

const comp1 = new Computador()
const comp2 = new Computador()
const comp3 = new Computador()

comp1.nome = 'Rapidao'
comp2.nome = 'Carao'
comp3.nome = 'Gamer'

console.log(comp1.nome)
console.log(comp2.nome)
console.log(comp3.nome)