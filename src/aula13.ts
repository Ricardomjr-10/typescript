// valor padrao ou default
function soma(n1:number=0, n2:number=0):number {
    return n1 + n2
}

console.log(soma(5))

function newUser(user:string, pass:string, nome?:string):void { // ? stringo ou undefined
    let dados = {user, pass, nome}
    console.log(dados)
  
}

newUser('bruno', '123')