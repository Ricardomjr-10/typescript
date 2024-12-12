"use strict";
//namespaces - agrupamento de classes e metodos dentro de um espaco especifico
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(1000);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
