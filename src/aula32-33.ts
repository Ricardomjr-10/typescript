//namespaces - agrupamento de classes e metodos dentro de um espaco especifico
namespace Veiculos {
    export abstract class Carro {// é preciso usar o export para exportar a classe, por causa do namespace
        nome: string
        motor: Motores.Motor
        constructor(nome: string) {
            this.nome = nome
            this.motor = new Motores.Motor(3,100)
        }
    }
}

namespace Motores {

    class Turbo {
        private pot: number
        constructor(pot: number) {
            this.pot = pot
        }
        get potencia() {
            return this.pot
        }
    }
    export class Motor {
        private ligado: boolean
        private cilindros: number
        private pot: number
        constructor(cilindros: number, pot: number, turbo?:Turbo) {
            this.ligado = false
            this.cilindros = cilindros
            this.pot = pot + (turbo? turbo.potencia : 0)
        }
        set liga(ligado:boolean) {
            this.ligado = ligado
        }
        get liga(){
           return this.ligado
        }
        get potencia() {
            return this.pot
        }
    }
}

