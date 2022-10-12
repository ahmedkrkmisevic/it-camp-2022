//array(nizovi)

//niy (array) je specijalna promenljiva koja moze skladistiti vise od jedne vrednosti
//sintaksa:

const niz1 = ["item1", "item2", "item3"];

//setimo se pravila da ponovna dodela vrednosti za promenljivu 
//"niz1" nije moguca.dakle 10linija koda je nekorektna.
// niz1 = ["item1", "item2"];
console.log(niz1);

//ali treba napomenuti da mozemo izmeniti (dodati ,izbrisati) neke elemente niza 
//kroz primenu brojnih metoda koje cemo raditi ubuduce,bez obzira 
//na to sto je niz definisan sa const keyword.

//sto se tice razmaka novih redova oni nece uticati na definisanje niza.
//dakle dozvoljeno je na sledeci nacin definisati niz:

const cars = [
    "mercedes",
    "bmw",
    "audi",
    "volkswagen",
    "volvo",
];


//pristupanje elementima niza.slicno kao kod stringova.
//indeksiranje ide od 0 pa sve do duzina  -1.
console.log(cars[2]);

//duzinu niza dobijamo pomocu metode length
let duzina = cars.length
console.log(cars.length);

for (let i = 0; i <= duzina - 1; i++) {
    console.log(cars[i]);
}

//drugi nacin zapisivanja for petlje je namenjen za svaki iterirajuci objekat .

// for (let car of cars) {
//     console.log(cars[i]);
// }

// let rec = "iterirajcui";
// for (let slovo of rec) {
//     console.log(slovo);
// }

//zapravo mozemo na pocetku definisati prazan niz pa tek onda mu
//dodeljivati vrednosti .

// const cars2 = [];
// console.log(cars2);
// cars2[0] = "bmw";
// console.log(cars2);

//mozemo vrlo lako zameniti neki elemnt drugim.


const cars3 = [
    "mercedes",
    "bmw",
    "audi",
    "volkswagen",
    "volvo",
];

cars3[2] = "mercedes";
console.log(cars3);

//videli smo takodje da  jedan niz moze sadrzati duplikate .

//jos jedan nacin definisanja nizova//

const cars4 = new Array("ponedeljakl", "utorak", "sreda");
console.log(cars4);


//za jednostavnost citljivost i brzinu izvrsavanja bolje je koristiti 
//klasicni nacin (preko []) definisanja nizova.

//niz definisan na bilo koji nacin ima tip objekat.
console.log(cars3);
console.log(typeof cars4);

//postoje 2 nacina za proveru da li je data promenljiva niz:
//1.array.isarray(cars3)
//2.cares3 instanceof array

console.log(Array.isArray(cars3));
console.log(cars3 instanceof Array);

const ahmed = ["ahmed", "krkmisevic", 14, false];
console.log(ahmed);
console.log(ahmed[3]);
console.log(typeof ahmed[3]);

//niz moze da sadryi objekte kao sto su datumi nizovi funkcije...

const niz2 = [
    "novi pazar",
    "srbija ",
    new date(),
    ["centar nit", "it camp", "|| ciklus"],
    function () {
        return 5;
    }
]

