/*
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: ‘Marco’, id: 213, grades: 78 },
    { name: ‘Paola’, id: 110, grades: 96 },
    { name: ‘Andrea’, id: 250, grades: 48 },
    { name: ‘Gaia’, id: 145, grades: 74 },
    { name: ‘Luigi’, id: 196, grades: 68 },
    { name: ‘Piero’, id: 102, grades: 50 },
    { name: ‘Francesca’, id: 120, grades: 84 },
];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. 
Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array 
sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale
di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale
i voti superiore a 70 e id superiore a 120

*/

let students = [
    { name: "Marco", id: 213, grades: 78 },
    { name: "Paola", id: 110, grades: 96 },
    { name: "Andrea", id: 250, grades: 48 },
    { name: "Gaia", id: 145, grades: 74 },
    { name: "Luigi", id: 196, grades: 68 },
    { name: "Piero", id: 102, grades: 50 },
    { name: "Francesca", id: 120, grades: 84 },
];

const upperCase = students.map((nome, i) => {
    upperCase.nome[i].toUpperCase();
});

console.log(upperCase);

const highGrades = students.filter((grades) => {
    if (grades > 70) {
        true;
    }
});