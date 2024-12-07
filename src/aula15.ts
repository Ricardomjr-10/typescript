// Rest e espread operator
function soma2 (v1:number, v2:number, v3:number) {
    return v1 + v2 + v3
}

console.log(soma2(10, 20, 30))

// rest
function soma3 (...n:number[]) {
    let s:number = 0
    n.forEach(e => s += e)
    return s
}

console.log(soma3(10,20))
