//ENUM- enumaradores
enum diasSemana {
    domingo = 1,
    segunda = 2,
    terca = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sabado = 7
}

// console.log(diasSemana.domingo)
// console.log(diasSemana['domingo'])
// console.log(diasSemana[1])

const data = new Date()
// console.log(data.getDate())
// console.log(diasSemana[data.getDay() + 1])


//enum textual
enum cores {
    branco = '#fff',
    preto = '#000',
    azul = '#00f',
    verde = '#0f0',
    vermelho = '#f00'
}

console.log(cores.branco)
console.log(cores['branco'])

// enum sem especificar numero

enum tipoUsuario {
    ADMIN=10,
    NORMAL=100,
    VISITANTE=1000
}

console.log(tipoUsuario.ADMIN)

//enum como tipo
const tp: tipoUsuario = tipoUsuario.ADMIN
console.log(tp)
