// type objects
let pessoa = {
    nome: 'Luiz',
    idade: 30,
    status: 'Ativo',
    ola: () => console.log('Olá')
}

pessoa.nome = 'Maria'

console.log(pessoa.nome)
console.log(typeof pessoa)