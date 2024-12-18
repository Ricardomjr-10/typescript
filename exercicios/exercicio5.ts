// Exercício 2: Figura Geométrica
// Enunciado:
// Crie uma interface FiguraGeometrica com os métodos calcularArea()
//  e calcularPerimetro(). Crie classes concretas Circulo, 
// Quadrado e Retangulo que implementem essa interface.

interface FiguraGeometrica {
    calcularArea(): number
    calcularPerimetro(): number
}

class Circulo implements FiguraGeometrica {
    raio: number
    constructor(raio: number) {
        this.raio = raio
    }
    calcularArea(): number {
        return Math.PI * this.raio ** 2
    }
    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio
    }
}

class Quadrado implements FiguraGeometrica {
    lado: number
    constructor(lado:number) {
        this.lado = lado
    }
    calcularArea(): number {
        return this.lado ** 2
    }
    calcularPerimetro(): number {
        return 4 * this.lado
    }
}

class Retangulo implements FiguraGeometrica {
    largura: number
    altura: number
    constructor(largura: number, altura: number) {
        this.largura = largura
        this.altura = altura
    }
    calcularArea(): number {
        return this.largura * this.altura
    }
    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura)
    }
}

const circulo = new Circulo(5)
const quadrado = new Quadrado(5)
const retangulo = new Retangulo(5, 10)

console.log(Math.round(circulo.calcularPerimetro()), circulo.calcularArea())

console.log(quadrado.calcularPerimetro(), quadrado.calcularArea())

console.log(retangulo.calcularPerimetro(), retangulo.calcularArea())