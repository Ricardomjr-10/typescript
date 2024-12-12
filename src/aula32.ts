//namespaces - agrupamento de classes e metodos dentro de um espaco especifico
namespace Veiculos {
    export class Carro {// é preciso usar o export para exportar a classe, por causa do namespace
        nome:string
        constructor(nome:string) {
            this.nome = nome
        }
    }
}

namespace Motores {
    class Motor {
        pot:number
        constructor(pot:number) {
            this.pot = pot
        }
    }
}

const carro1 = new Veiculos.Carro('Ferrari')

console.log(carro1.nome)