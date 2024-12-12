"use strict";
//namespaces - agrupamento de classes e metodos dentro de um espaco especifico
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        constructor(nome) {
            this.nome = nome;
        }
    }
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
})(Motores || (Motores = {}));
