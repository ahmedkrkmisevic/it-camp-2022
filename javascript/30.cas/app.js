// const firsttask = (arr) => {
//     const parni = [];
//     for (let broj of arr) {
//         if (broj % 2 === 0) {
//             parni.push(broj);
//         }
//     }
//     return parni;
// };
// console.log(firsttask([- 66, -67, -99]));

// javascript sortiranje nizova //

//sort() - vrsi sortiranje niza abecedno (alfabet).

const grupa = ["talib", "ahmed", "nejra", "musa", "aminax2", "abdurahman"]
grupa.sort()
console.log(grupa);

//za obrnuto sortiuranje se korsiti reverse()
const grupa2 = ["talib", "ahmed", "nejra", "musa", "aminax2", "abdurahman"]
grupa.reverse()
console.log(grupa2);
//reverse() okrece nas niz od poslednjeg ka prvom elementu.
//ako zelimo da nam elemnti budu poredjani od z-a treba primeniti 
//sort metodu pa onda reverse

//sort () metoda ne radi dobar posao kod brojeva samim tim moramo kao argument staviti neku funkciju koje ce nam poredjati brojeve 
//od najmanjeg ka najvecem ili obratno.
let brojevi = [-56, 85, 61, -32, 2, 105];
// brojevi.sort();

//fora:
// brojevi.sort(function (a, b) { return a - b });
// console.log(brojevi);

//sortiranje niza od veceg ka manjem broju ide na slican nacin :
brojevi.sort((a, b) => { return b - a });
console.log(brojevi);

//random sortiranje niza :
brojevi.sort(function () { return 0.5 - Math.random });
console.log(brojevi);

// postoji nacin da dobijemo najveci(najmanji )element niza.
//1.Sortiranjem niza zatim pristupamo najvece4m  odnisno najmanjem elemntu.

brojevi = [56, 85, 61, -32, -2, 105];
//dobijanje minimuma :
function minimum(arr) {
    arr.sort((a, b) => a - b);
    return arr[0]
}
console.log(minimum(brojevi));

function maksimum(arr) {
    arr.sort((a, b) => b - a);
    return arr[0]
}
// console.log(maksimum(brojevi));

//2. primenom math.max.apply() (math.min.apply()):
// dobijanje minimuma ide na sledevi nacin 
let minimum2 = Math.min.apply(null, brojevi)
console.log(minimum2);
//dobijanje maksimuma:
let minimum3 = Math.max.apply(null, brojevi)
// console.log(minimum3);

//3.pravljenje funkcije koja nam vraca minimum(maksimum).

// const min = (arr) => {
//     let minimum = Number.POSITIVE_INFINITY
//     for (number of arr) {
//         if (number < minimum) {
//             minimum = number
//         } return minimum
//     }

// };
// console.log(min(brojevi));


const max = (arr) => {
    let maksimum = Math.max.apply(null, brojevi)
    for (number of arr) {
        if (number < maksimum) {
            maksimum = number
        }
    }
    return maksimum
};
console.log(max(brojevi));