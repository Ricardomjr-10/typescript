// Exercício 1: Hierarquia de Veículos
// Enunciado:
// Crie uma hierarquia de classes para representar diferentes tipos de veículos.
//  A classe base Veiculo deve ter atributos como marca, modelo, ano e um método acelerar(). 
// Crie classes filhas Carro, Moto e Caminhao, cada uma com suas próprias características e 
// métodos específicos (por exemplo, Carro pode ter um atributo numeroPortas).

class Veiculo {
    marca: string
    modelo: string
    ano: number
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    acelerar () {
        console.log(`O veiculo ${this.modelo} acelerou.`)
    }
}

class Carro extends Veiculo {
    numeroPortas : number
    constructor(marca: string, modelo: string, ano: number, numeroPortas: number) {
        super(marca, modelo, ano)
        this.numeroPortas = numeroPortas
    }
}

class Moto extends Veiculo {
    cilindradas: number
    constructor(marca: string, modelo: string, ano: number, cilindradas: number) {
        super(marca, modelo, ano)
        this.cilindradas = cilindradas
    }
}

class Caminhao extends Veiculo {
    eixos: number
    constructor(marca: string, modelo: string, ano: number, eixos: number) {
        super(marca, modelo, ano)
        this.eixos = eixos
    }
}