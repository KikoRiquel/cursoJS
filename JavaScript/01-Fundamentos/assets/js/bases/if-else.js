const hoy = new Date();
let dia = hoy.getDay();

console.log(dia)

diaLetras = {
    0: 'D',
    1: 'L',
    2: 'M',
    3: 'X',
    4: 'J',
    5: 'V',
    6: 'S',
}
console.log(diaLetras[dia] || 'Dia no definido') 
