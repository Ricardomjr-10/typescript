//namespaces - agrupamento de classes e metodos dentro de um espaco especifico
namespace Veiculos {
    class Carro {
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