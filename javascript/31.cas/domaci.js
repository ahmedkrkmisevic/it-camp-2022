
let niz1 = ["crna", "plava", "oker", "petrolna", "roze", "plava"]
let velikaSlova = niz1.map((element) => element.toUpperCase());
console.log(velikaSlova);


let niz2 = [90, -7, 5, 9, -30, 99, 2, 81, 23, 104, 42, 9, 22, 19];
function noviNiz(arr) {
    let noviNizz = [];
    for (number of arr) {
        if (number > 17) {
            noviNizz.push(number);
        }
    }

    return noviNizz.sort((a, b) => a - b);
};

console.log(noviNiz(niz2));


// const nizz = [1, 2, 3]
// nizz = [4, 6, 5]; //NIJE DOZVOLJENA REINICIJALIZACIJA KOD CONST PROMENLJIVE


2.//NACIN
const godine = [21, 22, 23, 10]
const punoletni2 = godine.map((element) => {
    if (element > 17) {
        return element;
    } else {

    }

})
console.log(punoletni2);
