// generics - tipo genérico - estrutura de dados genérico
function f_teste<T>(v:T):T { // adiciona a letra T para indicar o tipo de dado
    return v
}
console.log(f_teste<number>(10))
console.log(f_teste<string>('10'))
console.log(f_teste<boolean>(true))