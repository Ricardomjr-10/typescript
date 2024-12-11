// interface - objetos literais - interfaces
interface curso1 {
    titulo: string,
    des: string,
    aulas: number,
    maxAlunos?: number, // ? - deixa a propriedade maxAlunos opcional
    iniciarCurso?(teste: string):void
}

interface cursoProg extends curso1 {
    aulas:number,
    maxAlunos?: number
}

interface cursoArtes extends curso1 {
    aulas:number,
    maxAlunos?: number
}


let curso1: curso1 // permitir que a variavel curso1 seja do tipo curso1
let curso2: cursoProg
let curso3: cursoArtes


// let curso2: {
//     titulo: string,
//     des: string,
//     aula: number,
//     maxAlunos: number,
// }

curso1 = {
    titulo: 'typeScript',
    des: 'curso de typescript',
    aulas: 12,
    maxAlunos: 30,
    iniciarCurso(test: string) {
        console.log('test')
    }
}

curso2 = {
    titulo: 'javascript',
    des: 'curso de javascript',
    aulas: 120,
    maxAlunos: 60
}

curso3 = {
    titulo: 'python',
    des: 'curso de python',
    aulas: 100,
}

console.log(curso1)
console.log(curso2)
console.log(curso3)
