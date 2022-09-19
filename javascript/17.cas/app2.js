function inchTocm(inch) {
    return `broj centimetara za unete inche iznosi ${inch * 2.54}`;
}
console.log(inchTocm(40));

const kmTom = function (km) {
    return `broj metara koji odgovara unetim kilometrima ${km * 1000}`;
};
console.log(kmTom(3));

// const teren = () => {
//     const duzinaterena = + prompt("unesite duzinu terena");
//     const unesitesirinu = + prompt("unesite sirinu terena");
//     if (duzinaterena = 0< || duzinaterena = 100< )
// }

function teren() {
    let sirina = +prompt("unesite sirinu terena");
    let duzina = + prompt("unesite duzinu");
    if (isNaN(sirina) || isNaN(duzina)) {
        return `sirina i duzina moraju biti brojevi `;
    } else if (sirina < 1 || sirina > 100) {
        return `sirina moze biti izmedju 1-100`;
    } else if (duzina < 1 || duzina > 100) {
        return `duzina mora biti izmedju 1-100`;
    } else {
        let ukupno = 2 * sirina + 2 * duzina;
        return `ukupno metara koje ce sportista da prodje $(ukupno)metara `;
    }
} console.log(teren());