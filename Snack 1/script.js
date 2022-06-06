/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e peso. Stampare a schermo la bici con peso minore utilizzando
destructuring e template literal
*/

// creo l'array delle biciclette con oggetti tipo e peso in kg
const bikes = [
    {
        type: "Bici da corsa",
        weightInKg: 5,
    },

    {
        type: "Mountain bike",
        weightInKg: 8,
    },

    {
        type: "City bike",
        weightInKg: 7,
    },

    {
        type: "E-bike",
        weightInKg: 10,
    },
]


// creo due variaibli con il destructuring i quali valori saranno tipo e peso della bici a indice 0
const {type, weightInKg} = bikes[0];
let lightestBike = {
    type,
    weightInKg,
    index: 0,
}

// ciclo l'array delle bici, partendo dall'indice 1, prendendo i valori tipo e peso delle bici
for (let i = 1; i < bikes.length; i++) {

    const {type, weightInKg} = bikes[i];
// se il peso delle bici che ciclo sarà minore della precedente (e della minore in assoluto), la salvo
    if (lightestBike.weightInKg > weightInKg) {
        lightestBike = {
            type,
            weightInKg,
            index: i,
        }
    }

}

// stampo in console la bici più leggera
console.log(lightestBike);

// stampo anche in html il tipo della bici ed il peso
const containerBikes = document.getElementById("container-bikes");

containerBikes.innerHTML += `   
                                <h1>Bici più leggera: ${lightestBike.type}</h1>
                                <h2>Peso: ${lightestBike.weightInKg} kg</h2>
                            `