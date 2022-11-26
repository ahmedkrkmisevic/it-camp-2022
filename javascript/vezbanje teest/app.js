// split() metoda ce izvrsiti konverzaciju stringa u niz (array)
// postoje 4 javascrpt search metode

//1. indexOf

var recenica = "Turkish cuisine incorporates as huge range of vegetable dishes known as zeytinyagli yemegi -- foods cooked in olive oil."

let index = recenica.indexOf("i");
console.log(index);

//2lastindexOf
let index1 = recenica.lastIndexOf("i");
console.log(index1);

//3.search metoda
//4.match
let index2 = recenica.match("as");
console.log(index2);

//4.includes metoda
let index3 = recenica.includes("asa", "as");
console.log(index3);

// startsWith () metode nam vraca boolean u zavisnosti od tgoa da li dati string pocinj3 recju
// koja je smestena kao argument metode:

//1.array.isarray(cars3)
//2.cares3 instanceof array
//push () metoda na najlaksi nacin dodaje element nizu na poslednjem mestu

//pop ()metoda se koristi za brisanje poslednjeg elementa niza.
//unshift() metoda dodaje element na prvom mestu u nizu.
// shift metoda se kosristi za brisanje prvog elemnta niza

