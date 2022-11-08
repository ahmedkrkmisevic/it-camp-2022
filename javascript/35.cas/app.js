// 1. Zadatak
// From the array of numbers, choose even double even numbers and
// compute the sum using Array's filter, map and reduce methods.

const brojevi = [12, 20, 13, 27, 18, 43, 2];

const firstTask = (arr) => {
    const sum = arr
        .filter((el) => el % 2 === 0)
        .map((el) => el * 2)
        .reduce((prev, curr) => prev + curr);
    return sum;
};

console.log(firstTask(brojevi));

// U Fibonacijevom nizu cije vrednosti ne prelaze 4 miliona, pronaci sumu parnih elemenata.

// Fibonacijev niz je sastavljen na nacin da je element jednak zbiru prethodna dva elementa.

const secondTask = () => {
    const niz = [1, 2];
    let i = 2;
    while (niz[i - 2] + niz[i - 1] <= 4000000) {
        niz.push(niz[i - 2] + niz[i - 1]);
        i++;
    }
    const sumaParnih = niz
        .filter((el) => el % 2 === 0)
        .reduce((prev, curr) => prev + curr);
    return sumaParnih;
};

console.log(secondTask());

// Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva
//  dvocifrena broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.


// 2. Zadatak NAPRAVITI FUNKCIJU
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog
// niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

const oldTask = (arr1, arr2) => {
    const newArr = arr1.concat(arr2);
    const newArr2 = newArr.filter((el) => el % 2 === 0);
    newArr2.unshift(10, 20);
    return `Prvi pomocni niz je: ${newArr}, \nDrugi pomocni niz je: ${newArr2}`;
};

console.log(oldTask(DATA1, DATA2));

// 1. Zadatak
// Sabrati sve godine tj. elemente niza a nakon toga podeliti sa brojem elemenata.
// tj. vratiti prosecnu starost godina.

// 2. Zadatak
// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.

const nizBrojeva = [2, 26, 38, 75, 11, 29];

function firstTask(arr) {
    const duzina = arr.length;
    const suma = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    );
    return +(suma / duzina).toFixed(2);
}
console.log(firstTask(nizBrojeva));

const secondTask2 = (arr) => {
    const totalDistanceInKilometers = arr
        .map(function (element) {
            return +(element * 1.609).toFixed(1);
        })
        .reduce((previousValue, currentValue) => previousValue + currentValue);
    return totalDistanceInKilometers;
};

console.log(secondTask2(nizBrojeva));