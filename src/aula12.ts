//funcoes em typescript
function teste():void{ // void - retorna nada
 console.log('Teste')
}

function logar(user:string, pass:string):void {
    console.log(`User:${user}
                Senha:${pass}`)
}

teste()

logar('bruno', '123')