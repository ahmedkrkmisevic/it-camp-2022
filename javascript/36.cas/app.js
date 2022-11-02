// reduceright()- isto kao reduce metoda,
// samo sto ucitavanje niza ide sa desne strane.

const niz = [1, 2, 3, 4, 5]
const suma = niz.reduceRight((prev, curr) => prev + curr)

//every()metoda ispituje da li je svaki element niza 
// prosao test.Rezultat jr boolean (true ili false).

const godine = [15, 14, 18, 18, 18, 16, 19, 17, 19]
const iseveryAdult = godine.every((element) => element >= 18);
console.log(iseveryAdult);
const adultarr = godine.filter((element) => element >= 18);
console.log(adultarr);
const iseveryAdult2 = adultarr.every((element) => element >= 18);
console.log(iseveryAdult2);

//some()metoda ispituje da li bar jedan element niza 
// zadovoljava odredjeni uslov.takodje vraca boolean.

const issomebodyadult = godine.some(function (element) {
    return element >= 18
});
console.log(issomebodyadult);

//find() metoda nam vraca prvi element koji ispunjava odredjeni uslov.
// ako nijedan ne prolazi uslov vraca undefined
const grupa = ["cole", "muha", "ja", "musa", "amine", "harun", "abdu", "taka"];
const firstelementpassedcondition = grupa.find((element) => element.length > 8)
console.log(firstelementpassedcondition);

//findindex()metoda nam vraca index koji je prvi prosao ovaj uslov zadat unutar funkcije.
// ako nijedan ne prolazi uslov vraca -1
const firstelementpassedcondition2 = grupa.findIndex((element) => element.length < 3)
console.log(firstelementpassedcondition2);

// array.from()metoda nam vraca niz iz bilo kojeg objekta 
// koji je iterirajuci(koji ima length u svojstvo)
//ova metoda vraca niz gde je svaki element 
// jedan karakter stringa koji pretvaramo u niz.

const recenica = "ovo mora biti niz"
const mustbearray = Array.from(recenica)
console.log(mustbearray);




