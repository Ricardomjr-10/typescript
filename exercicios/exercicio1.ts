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
}

const cachorro = new Cachorro("Rex", "Labrador", 3)

cachorro.latir()
