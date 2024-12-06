"use strict";
//funcoes em typescript
function teste() {
    console.log('Teste');
}
function logar(user, pass) {
    console.log(`User:${user}`);
    console.log(`Senha:${pass}`);
}
function soma2(n1, n2) {
    return n1 + n2;
}
teste();
logar('bruno', '123');
console.log(soma2(10, 20));
