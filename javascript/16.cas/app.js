// split() metoda ce izvrsiti konv erzaciju stringa u niz (array)

var recenica = "zelimo izvrsiti konverzaciju ove recenice u niz."
var recenica2 =
    "ako bi se desilo da na pocetku casa dodju svi na vreme ,\
to bi bilo cudo,koje do tog trenutka nismo videli,\
mada je zadovaljavajjuce da svakom casu pristpamo svi.";

//  izostavljajuci argiument metode split ce se izvrsiti konverzija datog stringa u niz koji ima jedan element 
var niz1 = recenica.split();
console.log(niz1);

// ako je argument string "," onda cemo dati string prewtvoriti u niz koji je podekjen na elemente koje razdvajaju zarezi. 
var niz2 = recenica2.split(",");
console.log(niz2);

// sledeci primer ce od svakog karaktera stringa praviti jedan elemnt novostalog niza:
var niz3 = recenica.split("")
console.log(niz3);

// postoje 4 javascript search metode:
// 1. indexof()
// indexof metoda nam vraca indeks poecetne reci koju trazimo.

var recenica = "Turkish cuisine incorporates as huge range of vegetable dishes known as zeytinyagli yemegi -- foods cooked in olive oil."


let index1 = recenica.indexOf("yemegi");
console.log(index1);

let index2 = recenica.indexOf("pizza");
console.log(index2);

// 2.lastindexof()

let index3 = recenica.indexOf("as")
let index4 = recenica.lastIndexOf("as");
console.log(index3 + "\n" + index4);
// ako trazimo poslednji indeks nepostojeceg stringa rezultat ce  biti -1.

let index5 = recenica.lastIndexOf("pizza");
console.log(index5);

// search() metoda nam vraca indeks trazenog stringa:
"Turkish cuisine incorporates as huge range of vegetable dishes known as zeytinyagli yemegi -- foods cooked in olive oil."

var index6 = recenica.search("as");
console.log(index6);

// match()metoda

var matchingThe = recenica.match("as");
console.log(matchingThe);

var matchingThe2 = recenica.match(/as/gi);
console.log(matchingThe2);

// includes()nam vraca boolean:

var recenica = "jos najvise jedan cas cemo raditi string meetode."

var isPresence = recenica.includes("cas")
console.log(isPresence);
var isPresence2 = recenica.includes("skola")
console.log(isPresence2)








