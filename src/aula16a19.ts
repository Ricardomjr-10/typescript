//P.O.O - classes

class Computador {
        public nome: string;
        private ram :number;
        private cpu :number
        private ligado: boolean

    constructor( nome:string, ram:number, cpu:number) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu
        this.ligado = false
    }
    //metodos
    info():void {
        console.log(`Nome: ${this.nome}`)
        console.log(`Ram: ${this.ram}`)
        console.log(`CPU: ${this.cpu}`)
        console.log(`Ligado: ${this.ligado? 'Sim':'Não'}`)//ternario
        console.log('------------------------')
    }

    ligar(): void {
        this.ligado = true
    }

    desligar():void {
        this.ligado = false
    }
}

//instaciar uma classe
const comp1 = new Computador("comp1", 64, 4)
const comp2 = new Computador("comp2", 32, 5)
const comp3 = new Computador("comp3", 128, 10)

comp1.ligar()
comp3.ligar()
comp1.desligar()

comp1.nome = 'Rapidao'
//comp1.ligado = true - nao pode alterar o valor da propriedade pois ela é privada

comp1.info()
comp2.info()
comp3.info()

//modificadores de acesso
//public - padrao - fora da classe, dentro da classe e filhos
//private - nao pode ser acessado fora da classe
//protected - pode ser acessado dentro e fora da classe