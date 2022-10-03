// const changeindexes = () => {
//     const recenica = prompt("unesite neku recenicu:")
//     let duzina = recenica.length
//     let novarecenica = ""
//     for (let i = 0; i < duzina; i++) {
//         if (duzina % 2 === 1 && i === duzina - 1) {
//             novarecenica += recenica[i]
//         } else if (i % 2 === 0) {
//             novarecenica += recenica[i + 1]
//         } else if (i % 2 === 1) {
//             novarecenica += recenica[i - 1]
//         }
//         return novarecenica;

//     }
// };
// console.log(changeindexes());

const juve = () => {
    const a = prompt("unesite prvu recenicu")
    const duzina1 = a.length
    const b = prompt("unesite drugu recenicu ")
    const duzina2 = b.length
    let c = "";
    // let duzina = 0
    // if (a.duzina1> duzina2){
    //     duzina = a.length;
    // }else{
    //     duzina = duzina2;
    // }
    // sintaksa za ternary operator:
    // uslov ? vrednost u slucaju ispunjenja uslova :vrednost u slucsju neiuspunjenja uslova.
    let duzina = a.length > duzina2 ? a.length : b.length;
    for (let i = 0; i < a.length; i++) {
        if (i >= duzina1) {
            c += b[i]
        } else if (i >= duzina2) {
            c += a[i]

        }
        else {
            c += a[i] + b[i];
        }
        return c;

    }
};
console.log(juve());

