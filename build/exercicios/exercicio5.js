"use strict";
// Exercício 2: Figura Geométrica
// Enunciado:
// Crie uma interface FiguraGeometrica com os métodos calcularArea()
//  e calcularPerimetro(). Crie classes concretas Circulo, 
// Quadrado e Retangulo que implementem essa interface.
class Circulo {
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
class Quadrado {
    lado;
    constructor(lado) {
        this.lado = lado;
    }
    calcularArea() {
        return this.lado ** 2;
    }
    calcularPerimetro() {
        return 4 * this.lado;
    }
}
class Retangulo {
    largura;
    altura;
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
}
const circulo = new Circulo(5);
const quadrado = new Quadrado(5);
const retangulo = new Retangulo(5, 10);
console.log(circulo.calcularArea());
