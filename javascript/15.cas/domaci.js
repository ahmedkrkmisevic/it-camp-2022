const domaci = function () {
    let nekarecenica = prompt("unesite neku recenicu ");
    let duzina = nekarecenica.length;
    let poladuzine = duzina / 2;
    let prvideo = nekarecenica.substr(0, poladuzine).toUpperCase()
    let drugideo = nekarecenica.substr(poladuzine, duzina).toLowerCase()


    let prva = nekarecenica.toUpperCase();
    let druga = nekarecenica.toLocaleLowerCase();
    let treca = prvideo.concat(drugideo)
    let cetvrta = nekarecenica.replace(/skola/gi, "fakultet")
    let peta = nekarecenica.substring(0, 10)
    let sesta = nekarecenica.slice(-10, duzina)
    return prva.concat("\n", druga, "\n", treca, "\n", cetvrta, "\n", peta, "\n", sesta)

};
console.log(domaci());

let recenica = "recenica koju trba iseci."
let prva = recenica.substring(4, 8)
let druga = recenica.substring(4, 8)
let treca = recenica.substr(4, 10)