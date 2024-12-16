// Exercício 2: Criando uma Classe "ContaBancaria" (Fácil)
// Enunciado:
// Crie uma classe chamada ContaBancaria com os seguintes atributos:

// numeroConta: number
// saldo: number
// Implemente os métodos:

// sacar(valor: number): Decrementa o saldo se o valor for válido.
// depositar(valor: number): Incrementa o saldo.
// exibirSaldo(): Imprime o saldo no console.

class ContaBancaria {
    numeroConta: number
    saldo: number
    constructor(numeroConta: number, saldo: number) {
        this.numeroConta = numeroConta
        this.saldo = saldo
    }
    sacar(valor: number) {
        if (this.saldo >= valor) {
            this.saldo -= valor
            console.log(`saque realizado com sucesso. Novo saldo: ${this.saldo}`)
        } else {
            console.log("Saldo insuficiente")
        }
    }
    depositar(valor: number) {
        this.saldo += valor
        console.log(`deposito realizado com sucesso. Novo saldo: ${this.saldo}`)
    }
    exibirSaldo() {
        console.log(`Saldo atual: ${this.saldo}`)

    }
}

const novaConta = new ContaBancaria(123, 1000)

novaConta.sacar(500)
novaConta.sacar(500)

novaConta.depositar(2000)

novaConta.exibirSaldo()