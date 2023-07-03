const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

console.warn('While')
let i = 0;
while (i < carros.length) {
    console.log(carros[i])
    i++;
}

let j = 0;
while(carros[j]) {
    console.log(carros[j])
    j++;
}


console.warn('Do While')

let x = 0;
do {
    console.log(carros[x])
    x++;
} while ( carros[x]);

