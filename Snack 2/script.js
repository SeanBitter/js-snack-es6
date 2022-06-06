/*
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//creo l'array delle squadre
const footballTeams = [
    {
        name: "Roma",
        points: 0,
        foulsSuffered: 0,
    },

    {
        name: "Milan",
        points: 0,
        foulsSuffered: 0,
    },

    {
        name: "Juventus",
        points: 0,
        foulsSuffered: 0,
    },

    {
        name: "Inter",
        points: 0,
        foulsSuffered: 0,
    },

    {
        name: "Napoli",
        points: 0,
        foulsSuffered: 0,
    },

    {
        name: "Fiorentina",
        points: 0,
        foulsSuffered: 0,
    },

    {
        name: "Atalanta",
        points: 0,
        foulsSuffered: 0,
    },
];

// eseguo un ciclo per assegnare punti random alle squadre
for (let i = 0; i < footballTeams.length; i++) {
    const points = Math.floor(Math.random() * 100) + 1;
    footballTeams[i].points = points;

    // stampo in console un resoconto
    console.log(footballTeams[i].name + " ha finito il campionato con " + points + " punti")
}

// eseguo un ciclo per assegnare falli random alle squadre
for (let i = 0; i < footballTeams.length; i++) {
    const foulsSuffered = Math.floor(Math.random() * 600) + 1;
    footballTeams[i].foulsSuffered = foulsSuffered;

    // stampo in console un resoconto
    console.log(`${footballTeams[i].name} nel corso del campionato ha subito ${foulsSuffered} falli`)
}

// stampo in console l'array delle squadre
console.log(footballTeams);


// creo array per nomi e falli
const nameAndFouls = [];

for (let i = 0; i < footballTeams.length; i++) {
    // prendo i valori nomi e falli con il destructuring
    const {name, foulsSuffered} = footballTeams[i];

    // pusho nell'array vuoto gli oggetti relativi
    nameAndFouls.push({
        name,
        foulsSuffered,
        });
}

// stampo in console l'array con nomi e falli
console.log(nameAndFouls);