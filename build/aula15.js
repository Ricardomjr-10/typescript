"use strict";
// Rest e espread operator
function soma2(v1, v2, v3) {
    return v1 + v2 + v3;
}
console.log(soma2(10, 20, 30));
// rest
function soma3(...n) {
    let s = 0;
    for (let e of n) {
        s += e;
    }
    // n.forEach(e => s += e)
    return s;
}
console.log(soma3(10, 20, 30, 40));
