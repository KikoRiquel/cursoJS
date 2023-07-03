function saludar(nombre) {
    console.log(arguments)
    console.log('Hola ' + nombre)

    return 1;

    // Esto no se va a ejecutar
    console.log('Despues de un return no se ejecuta')
}

const saludar2 = function() {
    console.log('Hola Mundo')
}

const saludar3 = function(nombre) {
    console.log('Hola ' + nombre + ' Funcion Anonima')
}

const saludarFlecha = () => {
    console.log('Hola Flecha')
}

// Si se pasan argumentos los parentesis son opcionales
const saludarFlecha2 = nombre => {
    console.log('Hola Flecha ' + nombre)
}



// En una funcion de flecha si solo tiene la liena del retunr se puede abreviar asi
const sumar = (a, b) => a + b;

const sumar2 = (a,b) => {
    return a + b;
}

function sumar3(a,b) {
    return a + b
}

const numAleatorio = () => Math.random()

const retornoDeSaludar = saludar('Kiko', 20, true, 'Espania')
console.log({retornoDeSaludar})



saludar2()
saludar3('Kiko')
saludarFlecha()
saludarFlecha2('Kiko')

console.log(sumar(1,2))
console.log(sumar2(3,4))
console.log(sumar3(5,6))
console.log(numAleatorio())