// function firstTask() {
//     let recenica = prompt("unesite neku recenicu:")
//     let duzina = recenica.length
//     let brojac = 0
//     for (let i = 0; i < duzina; i++) {
//         if (recenica[i] === "m" || recenica[i] === "M") {
//             brojac++
//         }
//     }
//     return `uneta recenica sadrzi ${brojac} puta slovo m(M)`
// }
// console.log(firstTask());


// function prebrojati() {
//     let recenica = prompt("unesite neku recenicu")
//     let duzina = recenica.length
//     let brojac = 0
//     for (let i = 0; i < duzina; i++) {
//         if (recenica[i] === "0" || recenica[i] === "1" || recenica[i] === "2" || recenica[i] === "3" || recenica[i] === "4" || recenica[i] === "5" || recenica[i] === "6" || recenica[i] === "7" || recenica[i] === "8" || recenica[i] === "9") {
//             brojac++
//         }
//     } return `uneta recenica sadrzi ${brojac}cifri`;
// }
// console.log(prebrojati());

// const thirdTask = function () {
//     let recenica = prompt("unesite neku recenicu")
//     let duzina = recenica.length
//     let brojac = 0
//     for (let i = 0; i < duzina; i++) {
//         if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
//             brojac++
//         }
//     }
//     return `u datoj receniicima ${brojac}malih slova`
// }
// console.log(thirdTask());

// const thirdTask = function(){
//     let recenica = prompt("unesite neku recenicu ")
//     let duzina = recenica.length
//     let brojac= 0
//     for (let i = 0; i <duzina; i++){
//         if (recenica[i] === recenica[i].toLowerCase() && recenica[i]===recenica[i].toUpperCase){
//             brojac ++
//         }
//     }
//     return `vise `
// }

const thirdTask = function () {
    let recenica = prompt("unesite neku recenicu ")
    let duzina = recenica.length
    let malaslova = 0;
    let velikaslova = 0;


    for (let i = 0; i < duzina; i++) {
        if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
            malaslova++
        } else if (recenica[i] === recenica[i].toUpperCase() && recenica[i] !== " ") {
            velikaslova++
        }
        if (malaslova > velikaslova) {
            return `vise malih `
        }
    }
}
console.log(thirdTask());