// // Creare una funzione che preso un numero restituisce "even" se pari "odd" altrimenti
//
// // const evenOrOdd = (num) => {
// //     let result = "";
// //     if(num % 2 === 0) {
// //         result = "even";
// //     } else {
// //         result = "odd";
// //     }
// //     return result;
// // }
//
// // Funzione even or odd con operatore ternario
// const evenOrOdd = (num) => num % 2 === 0 ? "even" : "odd";
//
// console.log(evenOrOdd(4));
//
// const x = -1;
//
// if (x > 0) {
//   console.log("positivo");
// } else {
//   console.log("negativo");
// }
//
// // Sugar syntax - operatore ternario
// x > 0 ? console.log("positivo") : console.log("negativo");

////////////////////////////////////
// FOREACH - si usa per scorrere tutti gli elementi di un array
//
// const students = ["Daniel", "Valentina", "Ginmarco"];
//
// for(let i = 0; i < students.length; i++) {
//     const curStudent = students[i];
//     console.log(curStudent);
// }
//
// students.forEach((curStudent, index, origArray) => {
//     console.log(curStudent);
// })
//
// const cats = [
//   {
//     name: "Jerry",
//     color: "Gray",
//   },
//   {
//     name: "Felix",
//     color: "Black and White",
//   },
//   {
//     name: "Garfield",
//     color: "Orange",
//   },
// ];
//
// cats.forEach((curCat, index) => {
//     const text = `Il gatto numero ${index} di nome ${curCat.name} è di colore ${curCat.color}`;
//     console.log(text);
// })

// MAP
// Partendo dall'array di numeri, creare un nuovo array di numeri moltiplicati per due
const numbers = [3, 6, 8, 12];

// const newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     const curNumber = numbers[i];
//     const doubleNumber =  curNumber * 2;
//     newNumbers.push(doubleNumber);
// }
//
// console.log(newNumbers);

// Facciamo la stessa operazione con metodo map
// Quando ritorniamo il nuovo valore, map lo pusha nel nuovo array
// const newNumbers = numbers.map((curNumber) => curNumber * 2);
// 
// console.log(newNumbers);
// 
// // Partendo dall'array di gatti, ritornare array di solo nomi di ogni gatto
// // Array di oggetti, come risultato voglio array di stringhe ["Jerry", "Felix", "Garfield"]
// const cats = [
//   {
//     name: "Jerry",
//     color: "Gray",
//   },
//   {
//     name: "Felix",
//     color: "Black and White",
//   },
//   {
//     name: "Garfield",
//     color: "Orange",
//   },
// ];
// 
// const catNames = cats.map((curCat) => curCat.name);
// console.log(catNames);
// 
// const newCats = cats.map((curCat) => {
//     return {
//         name: curCat.name,
//         color: curCat.color,
//         greeting: `Ciao ${curCat.name}`
//     };
// });
// 
// console.log(newCats);

// FILTER
const footballTeams = [
  {
    nome: "Milan",
    falliSubiti: 56,
    puntiFatti: 78,
  },
  {
    nome: "Roma",
    falliSubiti: 34,
    puntiFatti: 80,
  },
  {
    nome: "Inter",
    falliSubiti: 78,
    puntiFatti: 120,
  },
];

// Creare un'array con soli squadre che hanno puntiFatti > 79
// const newTeams = [];
// for (let i = 0; i < footballTeams.length; i++) {
//     const curTeam = footballTeams[i];
//     if(curTeam.puntiFatti > 79) {
//         newTeams.push(curTeam);
//     }
// }
// 
// console.log(newTeams);

// const newTeams = footballTeams.filter((curTeam) => {
//     // Per ogni elemento
//     // Se la funzione ritorna true
//         // elemnto sarà pushato automaticamente nel nuovo array
//     // Altrimenti
//         // non sarà pushato
//     return curTeam.puntiFatti > 79;
// });

// const newTeams = footballTeams.filter((curTeam) => curTeam.puntiFatti > 79)
// 
// console.log(newTeams);

// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// const animals = [
//   { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
//   { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
//   { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
// ]
// // Crea un nuovo array con la lista dei mammiferi.
// 
// const mammiferi = animals.filter((item) => item.classe === "mammiferi");
// console.log(mammiferi);

const cars = [
    {
        brand: "fiat",
        model: "auto 1",
        fuel: "benzina"
    },
    {
        brand: "fiat",
        model: "auto 2",
        fuel: "diesel"
    },
    {
        brand: "fiat",
        model: "auto 3",
        fuel: "benzina"
    },
    {
        brand: "fiat",
        model: "auto 4",
        fuel: "gpl"
    },
    {
        brand: "fiat",
        model: "auto 5",
        fuel: "benzina"
    },
    {
        brand: "fiat",
        model: "auto 6",
        fuel: "elettrico"
    }
]

const benzinaCars = [];
const dieselCars = [];
const otherCars = [];

cars.forEach((car) => {
    if(car.fuel === "benzina") {
        benzinaCars.push(car);
    } else if (car.fuel === "diesel") {
        dieselCars.push(car);
    } else {
        otherCars.push(car);
    }
})

console.log(benzinaCars);
console.log(dieselCars);
console.log(otherCars);