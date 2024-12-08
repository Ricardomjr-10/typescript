//P.O.O - classes
class Computador {
    nome: string = 'computador 1'
    ram: number=0
    cpu: number=0
    ligado: boolean= true
    
    constructor(nome:string) {
        this.nome = nome
        console.log('objeto criado')
    }

}

//instaciar uma classe
const comp1 = new Computador("comp1")
const comp2 = new Computador("comp2")
const comp3 = new Computador("comp3")


console.log(comp1.nome)
console.log(comp2.nome)
console.log(comp3.nome)