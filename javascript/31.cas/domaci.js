
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
