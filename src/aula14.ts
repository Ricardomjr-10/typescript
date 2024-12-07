
const test = (txt?:string):void => {
    console.log(txt)
}
test('testando')
test('testando')
test('testando')
test()

const soma1 = (n1:number, n2:number):number => {
    return n1 + n2
}

console.log(soma1(25, 34))

const somaArray = (n:number[]):number => {
 let s: number = 0
 n.forEach(e => s += e)
 return s
}

let arr:number[] = [1, 2, 3, 4, 5]
console.log(somaArray(arr))