"use strict";
// valor padrao ou default
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(5));
function newUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
newUser('bruno', '123');
