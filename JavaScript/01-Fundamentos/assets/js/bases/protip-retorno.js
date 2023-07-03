// function crearPersona(nombre,apellido) {
//     return {
//         nombre:nombre,
//         apellido:apellido
//     }
// }

// function crearPersona(nombre,apellido) {
//     return {nombre,apellido}
// }

const crearPersona = (nombre,apellido) => ({nombre,apellido})

const persona = crearPersona('Kiko', 'Riquelme')
console.log(persona)

//
function imprimeArgumentos() {
    console.log(arguments)
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log(edad, args)
    return args;
}

const [casado,vivo,nombre,saludo] = imprimeArgumentos2(10, true, false,'kiko','hola')
console.log({casado,vivo,nombre,saludo})

const {apellido: nuevoApellido} = crearPersona('Kiko', 'Riquelme');
console.log({nuevoApellido})

const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    traje: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre,codeName,vivo,edad = 15,traje}) => {
    console.log({nombre})    
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({traje})     
}

imprimePropiedades(tony)