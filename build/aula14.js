"use strict";
const test = (txt) => {
    console.log(txt);
};
test('testando');
test('testando');
test('testando');
test();
const soma1 = (n1, n2) => {
    return n1 + n2;
};
console.log(soma1(25, 34));
const somaArray = (n) => {
    let s = 0;
    n.forEach(e => {
        s += e;
    });
    return s;
};
console.log(somaArray([1, 2, 3, 4, 5]));
