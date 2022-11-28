const niz = ["vahid", "abdurahman", "ahmed", "talib", "amine"];

//indexof () metoda pretrazuje niz i vraca nam indeks elementa
// koji predstavlja argument funkcije.
// ako se element koji pretrazujemo ne nalazi unutar niza,
//rezultat ce biti minus jedan.



function isimranhere(arr) {
    if (arr.indexOf("imranc") === -1) {
        return `sad ce`
    } else {
        return `imran se nalazi na ${arr.indexOf("imranc") + 1}.mestu`;
    }
};
console.log(isimranhere(niz));


//indexof () metoda pretrazuje niz i vraca nam indeks poslednjeg elementa
// koji predstavlja argument date metode.(u slucaju da se neki element nalazi vise puta u nekom nizu)
// ako se element koji pretrazujemo ne nalazi unutar niza,
//rezultat ce biti minus jedan.

//include()metoda -ako se neki element nalazu u argumentu unutafr niza 
// rezultat ce biti true a u obrnutom slucaju false.
console.log(niz.includes("mejra"));

//javascript keys()i entries()metoda nam vracaju indekse datog niza odnosno kombinaciju indeksa i vrednosti.

const indeksi = niz.keys() //array iterator object.

// for (let indeks of indeksi) {
//     console.log(indeks);
// }

const entries = niz.entries(); //array iterator object
for (item of entries) {
    console.log(item);
}

// flat()metoda iz niza nizova pravi jedan niz koji je sacinjen od svih elemenata
const fruits = [["jabuke", "kruske", "mandarine", "mango"], ["somun", "ruza", "ljep"], ["krompir", "bostan", "luk"]]
const fruitsiline = fruits.flat();
console.log(fruitsiline.sort());
console.log(fruitsiline);







