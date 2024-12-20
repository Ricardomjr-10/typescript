"use strict";
//namespaces - agrupamento de classes e metodos dentro de um espaco especifico
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Azul"] = 2] = "Azul";
        Cores[Cores["Verde"] = 3] = "Verde";
        Cores[Cores["Vermelho"] = 4] = "Vermelho";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "sim" : "nao");
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 0);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), 1);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, pot, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Ferrari", 0);
const carro2 = new Veiculos.CarroPopular("Fiat", 2);
carro1.ligar();
carro2.ligar();
console.log(`Nome: ${carro1.meuNome}`);
console.log(`Cor: ${carro1.minhaCor}`);
console.log(`Potencia: ${carro1.minhaPotencia}`);
console.log(`Ligado: ${carro1.estouLigado}`);
console.log('----------------------------------');
console.log(`Nome: ${carro2.meuNome}`);
console.log(`Cor: ${carro2.minhaCor}`);
console.log(`Potencia: ${carro2.minhaPotencia}`);
console.log(`Ligado: ${carro2.estouLigado}`);
console.log('----------------------------------');
