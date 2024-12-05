//readonly arrays - array somente leitura
let numeros:number[] = [10, 20, 30]
//let numeros: Array<number|string> = [10, 20, 30]
//let numeros: (number | string)[] = [10, 20, 30, '40']


numeros.push(40)
numeros.unshift(50)

numeros.pop()
numeros.shift()

console.log(numeros)

let numeros_ro: ReadonlyArray<number> = [100, 200, 300]
console.log(numeros_ro)