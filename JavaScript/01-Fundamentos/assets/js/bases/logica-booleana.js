const regresaTrue = () => {
    console.log('Regresa true')
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false;
}

console.warn('Not o la negacion')
console.log(true) // true
console.log(!true) // false
console.log(!false) // true

console.log(!regresaFalse()) //true

console.warn('And') // true si todos los valores son verdaderos

console.log(true && true) // true
console.log(false && true) // false
console.log(!false && true) // true

console.log(regresaFalse() && regresaTrue()) //false
console.log(regresaTrue() && regresaFalse()) //false

console.log('________________')
regresaFalse() && regresaTrue()

console.warn('OR')
console.log(true || false) // true
console.log(false || false) // false

console.log(regresaFalse() || regresaTrue())

console.warn('Asignaciones')
const soyUndefined = undefined
const soyNull = null
const soyFalse = false

const a1 = true && 'Hola Mundo'
const a2 = 'Hola' && 'Mundo' && soyFalse
const a3 = soyFalse || 'Ya no soy falso'
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso'
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso'

console.log({a1, a2, a3, a4, a5})

