//P.O.O - classes

class Computador {
        nome: string;
        ram :number;
        cpu :number
        ligado: boolean

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
        console.log(`Ligado: ${this.ligado}`)
        console.log('------------------------')
    }
}

//instaciar uma classe
const comp1 = new Computador("comp1", 64, 4)
const comp2 = new Computador("comp2", 32, 5)
const comp3 = new Computador("comp3", 128, 10)


comp1.info()
comp2.info()
comp3.info()