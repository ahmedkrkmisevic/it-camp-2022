// function toLowerCase() {
//     let recenica = prompt("unesite neku recenicu:");
//     return recenica.toLowerCase(;)
// }
// console.log(toLowerCase();)

// const isPalindrom = function (){
//     let recenica = prompt("unesite neku recenicu:");
//     let duzina = recenica.length
//     let obrnutaRecenica =""
//     for (let i = duzina - 1; i >= 0; i--){
//     obrnutaRecenica += recenica[i]
// }
// if (obrnutaRecenica === recenica){
//     return true
// }else{
//     return false;
// }
// };
// console.log(isPalindrom());


// var recenica = "pera ima devojku"
// let index = recenica.lastIndexOf(" ");
// console.log(index);

// const zadnjiRazmak = function () {
//     let recenica = prompt("unesite neku recenicu:")
//     const zadnjiRazmak = recenica.lastIndexOf(" ")
//     return zadnjiRazmak;
// }
// console.log(zadnjiRazmak());

// const prviString = function () {
//     let recenica = prompt("unesite neku recenicu:")
//     const prviString = recenica.indexOf(" ")
//     return prviString;

// }
// console.log(prviString());

// const stringovi = function () {
//     let a = prompt("unesite neku recenicu ")
//     let b = prompt("unesite neku recenicu")
//     let prvarec = "";
//     let drugarec = ""
//     let c = ""
//     let prvispace = a.indexOf(" ");
//     let poslednjispace = a.lastIndexOf(" ");
//     for (let i = 0; i < prvispace; i++) {
//         prvarec += a[i]
//     }
//     for (let i = poslednjispace + 1; i < b.length; i++) {
//         drugarec += b[i];

//     }
//     return prvarec.concat(" ", drugarec);

// }
// console.log(stringovi());

function tenth(n) {
    let recenica = prompt("unesijvkidsjiv:")
    prvihN = ""
    for (let i = 0; i < n; i++) {
        prvihN += recenica[i]
    }
    if (n > recenica.length) {
        return recenica;
    } else {
        return prvihN;
    }
}
console.log(tenth(10));