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
    notas: number[]
   constructor(nome:string, idade: number, matricula: number, notas: number[]) {
      super(nome, idade)
      this.matricula = matricula
      this.notas = notas
   }
}

class Professor extends Pessoa {
    disciplinas: string[]
    constructor(nome:string, idade:number, disciplinas: string[]) {
        super(nome, idade)
        this.disciplinas = disciplinas
    }

    mediaNotas(notas: number[]) {
       let media =  notas.reduce((acc, nota) => acc + nota, 0) / notas.length
       console.log(`A média das notas do aluno ${aluno.nome} é ${media}`)
    }

}

// Exercício 3: Crie uma classe Professor que também 
// herda de Pessoa e possui atributos específicos, como disciplinas lecionadas.
// Implemente um método para calcular a média das notas dos alunos.

const aluno = new Aluno("João", 20, 123, [7, 8, 9])
const professor = new Professor("Maria", 30, ["Matematica", "Portugues"])

console.log(aluno)
console.log(professor)
professor.mediaNotas(aluno.notas)