"use strict";
//desestruturacao - oque é?
//um jeito facil de extrair valores de um array ou objeto
//let aa,bb,cc,dd
let av = [10, 20, 30, 40];
// aa = av[0]
// bb = av[1]
// cc = av[2]
// dd = av[3]
//desestruturacao de array
let [aa, bb, cc, dd] = av;
let [aaa, bbb, ccc, ddd] = ["luiz", "maria", "joao", "pedro"];
console.log(aa, bb, cc, dd);
console.log(aaa, bbb, ccc, ddd);
//desetruturacao de objeto
const obj = {
    cor1: "azul",
    cor2: "vermelho",
    cor3: "amarelo",
    cor4: "verde"
};
let { cor1, cor2, cor3, cor4 } = obj;
console.log(cor1, cor2, cor3, cor4);
//outros exemplos - somente um valor
let [nu1 = 0, nu2 = 0, nu3 = 0] = [10];
//com spread
let [nu4, nu5, ...nu6] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(nu1, nu2, nu3);
console.log(nu4, nu5, nu6);
// desestruturacao de funcao
const fCores = () => {
    return ["azul", "vermelho", "amarelo", "verde"];
};
let [core1, c2, c3, c4] = fCores();
