// Exercício 3: Criando uma Hierarquia de Classes: "Pessoa" e "Aluno" (Médio)
// Enunciado:
// Crie uma classe base chamada Pessoa com os atributos nome e idade. 
// Em seguida, crie uma classe Aluno que herda de Pessoa e possui um atributo adicional matricula.

class Pessoa {
    nome: string
    idade: number
    constructor(nome:string, idade: number) {
        this.nome = nome
        this.idade = idade
    }
}

class Aluno extends Pessoa {
    matricula: number
   constructor(nome:string, idade: number, matricula: number) {
      super(nome, idade)
      this.matricula = matricula
   }
}

const aluno = new Aluno("João", 20, 123)

console.log(aluno)