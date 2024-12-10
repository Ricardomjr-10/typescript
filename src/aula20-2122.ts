//herança - classe que herda as mesmas caracteristicas da casse pai

class Conta {
    public numero: number
    public titular: string

    constructor( titular: string){
        this.numero = this.gerarNumeroConta()
        this.titular = titular
    }

    gerarNumeroConta():number {
        return Math.floor(Math.random() * 10000) + 1
    }
}

class ContaPF extends Conta {//heredan caracteristicas da conta pai
    cpf: number
    constructor(cpf:number, titular:string) {
        super(titular)
        this.cpf = cpf
    }
}

class ContaPJ extends Conta {//heredan caracteristicas da conta pai
    cnpj: number
    constructor(cnpj:number, titular: string) {
        super(titular)
        this.cnpj = cnpj
    }
}

const conta1 = new Conta('Breno')
const conta2  = new ContaPF(1231212, 'Rafael')
const conta3 = new ContaPJ(123124, 'Zuleide')

console.log(conta1, conta2)

