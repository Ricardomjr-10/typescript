// interface - objetos literais
interface curso1 {
    titulo: string,
    des: string,
    aula: number,
    maxAlunos: number,
}

let curso1: curso1
let curso2: curso1
let curso3: curso1

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
    maxAlunos: 60
}

console.log(curso1)
