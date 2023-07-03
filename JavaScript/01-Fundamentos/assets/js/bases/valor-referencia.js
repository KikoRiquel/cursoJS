let a = 10;
let b = a;
a = 30;

console.log({a, b})

let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = ana;

console.log({juan,ana})

// Resolucion
let kiko = {nombre: 'kiko'}
let silvia = {...kiko}
silvia.nombre = 'silvia'

console.log({kiko, silvia})

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre:'Peter'}
let tony = cambiaNombre(peter)

console.log({peter,tony})


const cambiaNombre2 = ({...persona}) => {
    persona.nombre = 'kiko'
    return persona
}
let silvia2 = {nombre: 'silvia'}
let kiko2 = cambiaNombre2(silvia)

console.log({silvia2, kiko2})

// Array
const frutas = ['Manzana', 'Pera', 'Piña']

console.time('slice')
const otraFrutas = frutas.slice()
console.timeEnd('slice')

console.time('spread')
const otraFrutas2 = [...frutas];
console.timeEnd('spread')

otraFrutas.push('Mango')
console.table({frutas, otraFrutas})