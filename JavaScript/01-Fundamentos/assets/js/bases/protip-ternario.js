const elMayor = (a,b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => miembro
    ? '2 Dolares'
    : '10 Dolares';

console.log(elMayor(20,15))
console.log(tieneMembresia(true))

const amigo = false;
const amigosArrr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki'
]

console.log(amigosArrr)

const nota = 90.5;
const grado = 
    nota >= 95 ? 'A+' :
    nota >= 90 ? 'A'  :
    nota >= 85 ? 'B+' :
    nota >= 80 ? 'B'  : 'F';

console.log({nota,grado})