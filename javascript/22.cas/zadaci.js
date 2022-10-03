let izracunati = function () {
    const prviBroj = +prompt("unesite prvi broj")
    const drugiBroj = +prompt("unesite neki broj")
    let suma = 0;
    if (isNaN(prviBroj) || isNaN(prviBroj)) {
        return `niste uneli broj `
    }
    for (let br = prviBroj; br <= drugiBroj; i++) {
        if (br % 2 === 0) {
            suma += br ** 2;

        }
    }
    return suma;
}
console.log(izracunati());
