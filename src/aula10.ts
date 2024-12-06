// null - undefined - unknown
//null - valor vazio - nulo
// undefined - indefinido -sem valor associado


let vnome: string | null 
vnome = 'ricardo'
console.log(vnome)

let vnome2: any
vnome2 = null
console.log(vnome2)

let vnome3: unknown= vnome // so pode ser atribuido em tipos unknown e any
let vnum:any = vnome3
console.log(vnome3)