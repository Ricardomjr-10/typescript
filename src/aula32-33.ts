//namespaces - agrupamento de classes e metodos dentro de um espaco especifico
namespace Veiculos {
    export class Carro {// é preciso usar o export para exportar a classe, por causa do namespace
        nome:string
        motor: Motores.Motor
        constructor(nome:string) {
            this.nome = nome
            this.motor = new Motores.Motor(1000)
        }
    }
}

namespace Motores {

    class Turbo {
        pot:number
        constructor(pot:number) {
            this.pot = pot
        }
    }
   export class Motor {
        pot:number
        constructor(pot:number) {
            this.pot = pot
        }
    }
}

