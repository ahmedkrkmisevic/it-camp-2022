//fibonacijev niz je sastavljen na nacin da je element jednak zbiru dva prethodna elementa.

//palindrom broja.

const ispalindrom = (broj) => {
    const strbroja = broj.toString()
    let obrnutistrbroja = "";
    for (let i = strbroja.length - 1; i >= 0; i--) {
        obrnutistrbroja += strbroja[i];
    }
    const obrnutibroj = +obrnutistrbroja
    if (obrnutibroj === broj) {
        return true
    } else {
        return false;
    }
};
// const highestpalindrom3 = () => {
// //     if (ispalindrom(202)) {
// //         return "jeste"
// //     } else {
// //         return "nije"
// //     }
// // };
// // console.log(highestpalindrom3())

// const highestpalindrom3 = () => {
//     let palindroms = ""
//     for (let i = 100; i <= 999; i++) {
//         for (let j = 100; j <= 999; j++) {
//             if (ispalindrom(i * j) && !palindroms.includes(i * j)) {
//                 palindroms.push(i * j);
//             }
//         }
//     } palindroms.sort((a, b) => b - a);
//     return palindroms[0];
// };
// console.log(highestpalindrom3())

// const niz = ["a", "b", "c", "e", "d"]
// for (let i = 1; i <= 10; i++) {
//     for (let j of niz) {
//         console.log(i + j);
//     }
// }


