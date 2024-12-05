"use strict";
// type objects
let pessoa = {
    nome: 'Luiz',
    idade: 30,
    status: 'Ativo',
    ola: () => console.log('Olá'),
    info: (p) => console.log(p)
};
pessoa.nome = 'Maria';
console.log(pessoa.nome);
console.log(typeof pessoa);
pessoa.ola();
pessoa.info('Ricardo');
