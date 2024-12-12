// generics - tipo genérico - estrutura de dados genérico
function f_teste<T,U>(v:T,r:U):U { // adiciona a letra T para indicar o tipo de dado
    return r
}
console.log(f_teste<number,string>(10,'8')) // indica o tipo de dado
console.log(f_teste<string,number>('10',12))
console.log(f_teste<boolean,boolean>(true,false))

class C_teste<T> {
    public valor:T
    constructor(valor:T){
        this.valor = valor
    }
}

const ct1 = new C_teste<number>(10)
const ct2 = new C_teste<string>('luiz')

console.log(ct1.valor)