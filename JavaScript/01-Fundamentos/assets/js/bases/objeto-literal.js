const personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    traje: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

// Se trabaja de forma alfabetica
console.log(personaje)
console.log('Nombre', personaje.nombre)
console.log('Nombre', personaje['nombre'])
console.log('Edad', personaje.edad)

console.log('Coors', personaje.coords)
console.log('Lat', personaje.coords.lat)

console.log('No. Trajes', personaje.traje.length)
console.log('No. Trajes', personaje.traje[personaje.traje.length - 1])

const x = 'vivo';
console.log('Vivo', personaje[x])

console.log('Ultima Pelicula', personaje['ultima-pelicula'])

// Más detalles

delete personaje.edad;
console.log(personaje)

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Congela el objeto y no permite añadir ni modificar
// Pero si permite cambiar los objetos dentro del padre
Object.freeze(personaje)
personaje.dinero = 1000000000;
personaje.direccion.ubicacion = 'Costa Rica'
console.log(personaje)

const propiedades = Object.getOwnPropertyNames(personaje)
const valores = Object.values(personaje)
console.log({propiedades, valores})

