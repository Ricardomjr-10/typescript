// Exercício 1: Criando uma Classe "Cachorro" (Fácil)
// Enunciado:
// Crie uma classe chamada Cachorro com os seguintes atributos:

// nome: string
// raca: string
// idade: number
// Implemente um método chamado latir() que imprime uma mensagem no console, como "Au au!".

class Cachorro {
    nome: string
    raca: string
    idade:number
    constructor(nome:string, raca:string, idade: number) {
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    latir() {
        console.log("Au au!")
    }
    comer() {
        if (this.raca === 'Labrador') {
            console.log(`O cachorro ${this.raca} esta comendo.`)
        } else if (this.raca === 'Poodle') {
            console.log(`O cachorro ${this.raca} esta comendo.`)
        } else {
            console.log(`O cachorro ${this.raca} esta comendo.`)
        }
    }
}
//Exercício 1: Adicione um método comer() que imprime uma mensagem diferente 
// dependendo da raça do cachorro.

const cachorro = new Cachorro("Rex", "Labrador", 3)
const cachorro2 = new Cachorro("Toby", "Poodle", 2)
const cachorro3 = new Cachorro("Fido", "Golden Retriever", 4)

cachorro.latir()
cachorro.comer()
cachorro2.comer()
cachorro3.comer()
