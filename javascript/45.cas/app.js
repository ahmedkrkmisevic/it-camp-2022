//napraviti funkciju koja nam vraca novi niz koji nema duplikata:


// const eraseDuplicate = function (arr) {
//     const noviniz = arr.filter((number) => {
//         return arr.includes (number)=
//     })
//     return noviniz;
// };
// console.log(eraseDuplicate(niz));

//1.nacin
const niz = [12, 1, 3, 2, 3, 4, 6, 4];
const eraseDuplicate = function (arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
// console.log(eraseDuplicate(niz));

// const eraseDuplicate2 = (arr) => {
//     const newArr = arr.filter((element) => !newArr.includes(element)){

//     }
//     return newArr;
// }
// console.log();

// ... spread operator nam sluzi za pravljenje kopije niza ili objekta
// kao i spajanje vise nizova(objekata).

const niz1 = ["sto", "stolica", "tabla", "marker"];
const niz2 = [...niz1];
console.log(niz2);
niz2[1] = "fotelja";
console.log(niz2);
console.log(niz1);

// Spajanje vise nizova
const niz3 = [...niz, ...niz1];
console.log(niz3);
const niz4 = [15, ...niz2, 150]
console.log(niz4);

const obj = {
    ime: "muhamed",
    prezime: "krkmisevic",
    starost: 17,
};
const obj2 = {
    ...obj,
    bojaKose: "crna",
    kovrdzav: false,
};
console.log(obj2);

// napraviti funkciju koja vraca novi niz gde je svaki element objekat sa vrednostima title i budzet.

const movies = [
    { title: "inception,", rating: 7, budget: "230m" },
    { title: "interstelar,", rating: 6, budget: "200m" },
    { title: "godfather,", rating: 9, budget: "280m" },
    { title: "home alone,", rating: 5, budget: "260m" },
    { title: "bad boys,", rating: 10, budget: "210m" },

];

function just2(arr) {
    const newArr = arr.map(function (element) {
        return {
            title: element.title,
            budget: element.budget,
        };
    });
    return newArr;
}
console.log(just2(movies));