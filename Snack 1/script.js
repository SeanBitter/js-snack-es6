/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e peso. Stampare a schermo la bici con peso minore utilizzando
destructuring e template literal
*/

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

const containerBikes = document.getElementById("container-bikes");

const {type, weightInKg} = bikes[0];
let lightestBike = {
    type,
    weightInKg,
}

for (let i = 1; i < bikes.length; i++) {

    const {type, weightInKg} = bikes[i];

    if (lightestBike.weightInKg > weightInKg) {
        lightestBike = {
            type,
            weightInKg,
        }
    }

}

console.log(lightestBike);

containerBikes.innerHTML += `   
                                <h1>Bici più leggera: ${lightestBike.type}</h1>
                                <h2>Peso: ${lightestBike.weightInKg} kg</h2>
                            `