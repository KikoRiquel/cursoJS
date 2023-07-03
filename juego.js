let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K']

let puntosJugador = 0,
    puntosComputadora = 0;
const btnPedir = document.querySelector('#btnPedir')
const divCartasJugador = document.querySelector('#jugador-cartas')
const puntosHTML = document.querySelectorAll('small')

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo)
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo)
        }
    }
    deck = _.shuffle(deck)
    console.log(deck)
    return deck;
}

crearDeck();

const pedirCarta = () => {
    if (deck.length === 0) throw 'No hay mas cartas';
    const carta = deck.pop()
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length - 1);
    return (isNaN(valor))
        ? puntos = (valor === 'A') ? 11 : 10
        : puntos = valor * 1;
}

const valor = valorCarta( pedirCarta() );

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta)
    puntosHTML[0].innerText = puntosJugador

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugador.classList.add = 'carta'
    divCartasJugador.append(imgCarta)

    console.log(deck);
    console.log(carta);
    console.log(puntosJugador);
})