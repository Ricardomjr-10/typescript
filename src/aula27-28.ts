// interface - objetos literais
interface curso1 {
    titulo: string,
    des: string,
    aula: number,
    maxAlunos?: number, // ? - deixa a propriedade maxAlunos opcional
    iniciarCurso(teste: string):void
}

let curso1: curso1 // permitir que a variavel curso1 seja do tipo curso1
let curso2: curso1
let curso3: curso1

function iniciarCurso(t:string):void {
    console.log('teste')
}

// let curso2: {
//     titulo: string,
//     des: string,
//     aula: number,
//     maxAlunos: number,
// }

curso1 = {
    titulo: 'typeScript',
    des: 'curso de typescript',
    aula: 12,
    maxAlunos: 30
}

curso2 = {
    titulo: 'javascript',
    des: 'curso de javascript',
    aula: 120,
    maxAlunos: 60
}

curso3 = {
    titulo: 'python',
    des: 'curso de python',
    aula: 100,
}

console.log(curso1)
console.log(curso2)
console.log(curso3)
