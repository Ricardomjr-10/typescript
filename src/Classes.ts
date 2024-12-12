export const Coisas = ['Corda', 'pilha', 'mochila']

export class Pessoa {
    nome:string
    altura:number
    constructor(nome:string, altura:number) {
        this.nome = nome
        this.altura = altura
    }
}

export class Objeto {
    nome:string
    constructor(nome:string) {
        this.nome = nome
    }
}