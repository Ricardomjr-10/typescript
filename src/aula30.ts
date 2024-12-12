//modulos- export e import
import { Pessoa } from './Classes'
import { Objeto } from './Classes'

const p1 = new Pessoa('bruno', 1.80)
const o1 = new Objeto('tiago')

console.log(p1.nome)
console.log(p1.altura)