//javascript array iteration//

//array iteration metode prolaze kroz svaki element niza.

//foreach() metoda-- poziva funkciju za svaki elemnt niza.

const niz = ["cole", "talib", "ahmed", "abdurahmna", "muhamed"];

niz.forEach((element) => console.log(element));//menja for petlju za dati niz.

for (let element of niz) {
    console.log(element);
}
for (let i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}

niz.forEach((element, index, array) =>
    console.log(
        `${index}:${element}: i treci argument je zapravo ceo niz ${array}`
    )
);

const brojevi = [4, -6, 12, 31, -21, 13, 6, 202, 34.5];

//Map() metoda -kreira novi niz,
//tako sto se iterir niz na koji se primenjuje metoda
// Vaznp je nappomenuti da map metoda ne mennja originalni niz.

function nizaddtwo(arr) {
    let noviniz = []
    for (number of arr) {
        noviniz.push(number + 2)
    }
    return noviniz;
}
console.log(nizaddtwo(brojevi));

const noviniz = brojevi.map((element) => element + 2);
console.log(noviniz);


const niz2 = [""];
const addprezime = niz2.map((element) => element + "_");
console.log(addprezime);

const brojevi2 = [4, -6, 12, 31, -21, 13, 6, 202, 34.5];
const nesto = brojevi2.map(function (element) {
    if (element > 0) {
        return element ** 2;
    } else {
        return element;
    }
});
console.log(nesto);
