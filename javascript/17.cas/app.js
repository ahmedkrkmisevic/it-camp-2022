// const pokloni = () => {
//     const cokoladicaPoklon = +prompt("unesite broj cokoladica po jednom poklonu");
//     const ukupnoCokoladica = +prompt("unesite ukupan broj cokoladica");
//     if (isNaN(cokoladicaPoklon) || isNaN(ukupnoCokoladica)) {
//         return "niste uneli korektne vrednsoti"
//     } else if (cokoladicaPoklon < 1 && cokoladicaPoklon > 20) {
//         return "broj cokoladica mora biti izmedju 1 i 20."
//     } else if (ukupnoCokoladica < 0 || ukupnoCokoladica > 1000) {
//         return "ukupan broj cokoladica mora biti izmedju 1 i 1000";
//     } else {
//         return Math.floor(ukupnoCokoladica / cokoladicaPoklon);
//     }
// }; console.log(pokloni());


// startsWith () metode nam vraca boolean u zavisnosti od tgoa da li dati string pocinj3 recju 
// koja je smestena kao argument metode:

let recenica = "provera stringova.";
console.log(recenica.startsWith("provera"));

// endswith metoda nam vraca boolean u zavisnosti od toga da li dati strng zavrsava recju
// koja je smestena kao argument metode.

console.log(recenica.endsWith("ingova."));

// javascript template literals
// back-ticks``
// prva prednost u odnosu nanavodnike je sto pisanje navdnika unutar stringa nece vratiti gresku.
let recenica2 = `danas je bilo pravo "jesenje" vreme.`
// omoguceno pisanje stringa u vise redova.
let recenica3 = `Fotografisanje je zakazano za utorak, a zvezda Pari Sen Žermena je odbila da se slika jer
francuski Savez nije uspeo da modifikuje ugovor o liku i delu koji Mbape
ima sa jednim od svojih sponzora čiji je promoter.liku i delu koji Mbape
Marketing tim Francuskog fudbalskog saveza (FFF) objavio je da će slikanje u utorak proći bez najvećeg s`


// interpolacija,odnosno mozemo zapisivati string u kombinaciji i sa varijablama:
let a = 10
let b = 14
let c = `prva  vrednost je ${a}, druga vrednost je ${b}.`;
console.log(c);


