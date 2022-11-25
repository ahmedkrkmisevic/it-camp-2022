
//  2. Zadatak
// Complete the code for the squareList function using any combination
// of map(), filter(), and reduce(). The function should return a new array
//  containing the squares of only the positive integers
//  (decimal numbers are not integers) when an array of real numbers is passed to it.
//   An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2]

const niz = [-3, 4.8, 5, 3, -3.2];

// noviniz = () => {
//     noviniz1 = niz.filter((element) => {
//         return element = Math.ceil && element > 0 && element > 0 ** 2
//     })
//     return noviniz1;
// };
// console.log(noviniz());

const squarelist = (arr) => {
    const filtered = arr.filter(function (number) {
        return number > 0 && number % 1 === 0;
    });
    const squares = filtered.map((number) => {
        return number ** 2;
    })
    return squares;
};
console.log(squarelist(niz));

//Number.isIntenger() metoda nam vraca boolean u zavisnosti od toga da li je
// argument date metode ceo broj ili nije.

const a = 14;
console.log(Number.isInteger(a));













