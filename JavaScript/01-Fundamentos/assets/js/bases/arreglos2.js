let juegos = ['Zelda', 'Mario', 'Metroid', 'ChronoTrigger']
console.log('Largo: ', juegos.length)

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ];

console.table({primero, ultimo})

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento,indice,arr})
})

let nuevaLongitud = juegos.push('F-Zero')
console.log({nuevaLongitud, juegos})

nuevaLongitud = juegos.unshift('Fire Emblem')
console.log({nuevaLongitud, juegos})

let juegoBorrado = juegos.pop()
console.log({juegoBorrado, juegos})

let pos = 1;


console.log(juegos)
let juegosBorrados = juegos.splice(pos, 2)
console.log({juegosBorrados, juegos})

let metroidIndex = juegos.indexOf('Metroid') // CaseSensitive
console.log({metroidIndex})