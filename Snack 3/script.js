/*
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione
compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/

// copio l'array di nomi
const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];

// creo variabili con i numeri min e max
const min = 1;
const max = 3;
// creo l'array vuoto su cui pusherò gli elementi con indice compreso tra i valori min e max
const newArray = [];

// eseguo il for each e pusho gli elementi che nel ciclo sono compresi tra min e max
myArray.forEach((element, index) => {
    if (index >= min && index <= max) {
        newArray.push(element);
    };
});

// stampo in console il nuovo array
console.log(newArray);


// eseguo il filter, creando il relativo array e ritornando gli elementi con indice compreso tra min e max
const arrayFilter = myArray.filter((element, index) => {
    if (index >= min && index <= max) {
        return true;
    } else {
        return false;
    }
});

// stampo in console il nuovo array creato con filter
console.log(arrayFilter);