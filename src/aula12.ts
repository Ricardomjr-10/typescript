//funcoes em typescript
function teste():void{ // void - retorna nada
 console.log('Teste')
}

function logar(user:string, pass:string):void {
    console.log(`User:${user}`)
    console.log(`Senha:${pass}`)
}

function soma2(n1:number, n2:number):number{
    return n1 + n2
}

teste()
logar('bruno', '123')

let res:number = soma2(10,20)
let sres:string = soma2(2,8).toString()
console.log(res)
console.log(sres)
