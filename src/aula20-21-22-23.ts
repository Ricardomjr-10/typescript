//herança - classe que herda as mesmas caracteristicas da casse pai
//acessando clase privada
class Conta {
    protected numero: number
    protected titular: string
    private saldoConta: number

    constructor( titular: string){
        this.numero = this.gerarNumeroConta()
        this.titular = titular
        this.saldoConta = 0
    }

    private gerarNumeroConta():number {
        return Math.floor(Math.random() * 10000) + 1
    }

    protected info() {
        console.log(`titular: ${this.titular}`)
        console.log(`numero: ${this.numero}`)
        console.log('------------------------')
    }

    public saldo():number {
        return this.saldoConta
    }

    protected deposito(valor: number) {
        this.saldoConta += valor
    }

    protected saque(valor: number) {
        if (valor >= this.saldoConta) {
            this.saldoConta -= valor    
        }
    }
}

class ContaPF extends Conta {//heredan caracteristicas da conta pai
    cpf: number
    constructor(cpf:number, titular:string) {
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
}

class ContaPJ extends Conta {//heredan caracteristicas da conta pai
    cnpj: number
    constructor(cnpj:number, titular: string) {
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
}

const conta1 = new Conta('Breno')
const conta2  = new ContaPF(1231212, 'Rafael')
const conta3 = new ContaPJ(123124, 'Zuleide')

// console.log(conta1, conta2)

//conta1.info()
conta2.info()
conta3.info()

