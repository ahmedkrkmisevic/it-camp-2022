let niz = [20, 15, 19, 90, 54, 67];
const niz2 = []
for (let number of niz) {
    if (number > 17) {
        niz2.push(number);
    }
};
console.log(niz2);

//filter()metoda kreira novi niz sa onim elementima koji su prosli test.
//preko filter()metode dobijamo novi niz cija je maksimalna duzina jednaka
//duzini niza na koji se primenuje metoda a minimalna je duzina 0.
//odradimo prethodni zadatak na drugi nacin
//element>17 predstavlja uslov na osnovu kojeg se element dodaje uniz ili ne dodaje.

const niz3 = niz.filter((element) => element > 17);
console.log(niz3);

const noviniz = niz3.filter((element) => element % 2 === 0)
console.log(noviniz);


const words = ["televizor", "daljinski", "telefon", "teletabis"];
const words2 = words.filter((element) => element[1] === "e");
console.log(words2);

//2.nacin

const secondword = (el) => {
    return el[1] === "e";
};
const worde = words.filter(secondword);
console.log(worde);
const nizina = [20, 1, 2, 3, 50, 60];

const words5 = words.filter((element) => element.length <= 2);
console.log(words5);

const maxlength = words.filter((element) => {
    return element.length <= 2;
});
const mapmap = words.map((element) => element + "A");

console.log(maxlength);
//
const newarr = ["rec", "dve reci", 26, true, false, [true, false], 49, true];
const newarr2 = newarr.filter((element) => typeof (element) === "boolean");
console.log(newarr2);

console.log(typeof [1, 2, 3]);
console.log([1, 2, 3] instanceof Array);
console.log(Array.isArray([1, 2, 3]));

const niz6 = [-14, -5, 22, 34, 55, 54, 29, 12, 6, 7, 10];
const niz7 = niz6.filter((element) => element % 2 === 0 && element <= 50);
console.log(niz7);