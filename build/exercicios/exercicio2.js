"use strict";
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
    numeroConta;
    saldo;
    constructor(numeroConta, saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`saque realizado com sucesso. Novo saldo: ${this.saldo}`);
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`deposito realizado com sucesso. Novo saldo: ${this.saldo}`);
    }
    exibirSaldo() {
        console.log(`Saldo atual: ${this.saldo}`);
    }
    transferir(contaDestino, valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            contaDestino.saldo += valor;
            console.log(`transferencia entre as contas ${this.numeroConta} e ${contaDestino.numeroConta} realizada com sucesso.`);
        }
    }
}
//Exercício 2: Implemente um método transferir(contaDestino: ContaBancaria, valor: number)
//  para transferir dinheiro entre contas
const novaConta = new ContaBancaria(123, 1000);
const conta1 = new ContaBancaria(456, 2000);
const conta2 = new ContaBancaria(789, 3000);
novaConta.sacar(500);
novaConta.sacar(500);
novaConta.depositar(2000);
novaConta.sacar(1000);
conta1.transferir(conta2, 500);
conta2.transferir(novaConta, 1000);
conta2.transferir(conta1, 500);
novaConta.exibirSaldo();
conta1.exibirSaldo();
conta2.exibirSaldo();
