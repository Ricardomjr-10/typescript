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
let res = soma2(10, 20);
let sres = soma2(2, 8).toString();
console.log(res);
console.log(sres);
