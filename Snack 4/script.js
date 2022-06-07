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

// copio l'elenco degli studenti con i relativi dati
let students = [
    { name: "Marco", id: 213, grades: 78 },
    { name: "Paola", id: 110, grades: 96 },
    { name: "Andrea", id: 250, grades: 48 },
    { name: "Gaia", id: 145, grades: 74 },
    { name: "Luigi", id: 196, grades: 68 },
    { name: "Piero", id: 102, grades: 50 },
    { name: "Francesca", id: 120, grades: 84 },
];

// creo l'array per le targhe su cui aggiungerò, col ciclo map, i nomi degli studenti in maiuscolo
const upperCaseArray = students.map((student, index) => {
    return student.name.toUpperCase();
});

// stampo in console l'array con i nomi in maiuscolo
console.log(upperCaseArray);


// creo l'array col ciclo filter, su cui aggiungerò gli studenti con voto superiore a 70
const highGrades = students.filter((student, index) => {
    if (student.grades > 70) {
        return true;
    } else {
        return false;
    }
});

// stampo con console table il nuovo array
console.table(highGrades);

// creo l'array col ciclo filter, su cui aggiungerò gli studenti con voto superiore a 70 e id superiore a 120
const highGradesAndId = students.filter((student) => {
    if (student.grades > 70 && student.id > 120) {
        return true;
    }
});

// stampo con console table il nuovo array
console.table(highGradesAndId);