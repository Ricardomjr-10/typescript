//herança - classe que herda as mesmas caracteristicas da casse pai
//acessando clase privada
class Conta {
    protected numero: number
    protected titular: string
    private saldoConta: number

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta()
        this.titular = titular
        this.saldoConta = 0
    }

    private gerarNumeroConta(): number {
        return Math.floor(Math.random() * 10000) + 1
    }

    protected info() {
        console.log(`titular: ${this.titular}`)
        console.log(`numero: ${this.numero}`)
        console.log('------------------------')
    }

    public saldo(): number {
        return this.saldoConta
    }

    protected deposito(valor: number) {
        if (valor < 0) {
            console.log('valor invalido')
            return
        }
        this.saldoConta += valor
    }

    protected saque(valor: number) {
        if (valor < 0) {
            console.log('valor invalido')
            return
        }
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor
        } else {

            console.log('saldo insuficiente')
        }
    }
}

class ContaPF extends Conta {//heredan caracteristicas da conta pai
    cpf: number
    constructor(cpf: number, titular: string) {
        super(titular)
        this.cpf = cpf
        console.log(`Conta PF criada:${titular}`) // atraves do proteced permiti o acesso
    }

    info() {
        console.log('tipo: PF')
        super.info()
        console.log(`CPF: ${this.cpf}`)
        console.log('------------------------')
    }

    public deposito(valor: number) {
        if (valor > 1000) {
            console.log('deposito não permitido')
        } else {
            super.deposito(valor)
        }
    }

    public saque(valor: number) {
        if (valor > 1000) {
            console.log('saque não permitido, limite de saque R$ 1000')
        } else {
            super.saque(valor)
        }
    }
}

class ContaPJ extends Conta {//heredan caracteristicas da conta pai
    cnpj: number
    constructor(cnpj: number, titular: string) {
        super(titular)
        this.cnpj = cnpj
        console.log(`Conta PJ criada:${titular}`)// ateaves do proteced permiti o acesso
    }

    info() {
        console.log('tipo: PJ')
        super.info()
        console.log(`CNPJ: ${this.cnpj}`)
        console.log('------------------------')
    }

    public deposito(valor: number) {
        if (valor > 10000) {
            console.log('deposito não permitido')
        } else {
            super.deposito(valor)
        }
    }

    public saque(valor: number) {
        if (valor > 10000) {
            console.log('saque não permitido, limite de saque R$ 10000')
        } else {
            super.saque(valor)
        }
    }
}

const conta1 = new Conta('Breno')
const conta2 = new ContaPF(1231212, 'Rafael')
const conta3 = new ContaPJ(123124, 'Zuleide')

// console.log(conta1, conta2)

//conta1.info()
// conta2.info()
// conta3.info()

conta2.deposito(800)
conta2.deposito(200)
conta2.deposito(1000)
conta2.saque(1000)
conta2.saque(1000)
conta2.saque(10)
console.log(conta2.saldo())

// conta3.deposito(10000)
// conta3.deposito(10000)
// conta3.deposito(10000)
// conta3.deposito(10001)
// console.log(conta3.saldo())

