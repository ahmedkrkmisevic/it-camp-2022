// funkcije

// Funkcije predstavljaju blok koda koji se izvrsava samo prilikom pozivanja.

// nacini zapisivanja funkcija :
// koriscenjem key word (rezervisane reci) function.



function nazivFunkcije() {
    return 5;
}

console.log(nazivFunkcije());

function zbirtriipet() {
    return 3 + 5;
}
console.log(zbirtriipet(0))

// treci primer
// prilikom definisanja funkcije u zagradu stavlja,o (prema potrebi)parametre
// koje funkcija koristi unutyar sebe.
function zbirdvabroja(prvibroj, drugibroj) {
    return prvibroj + drugibroj;
}
// prilikom pozivannja funkcije u zagradi stavljamo argumente na osnovu kojih se funkcija izvrsava.
console.log(zbirdvabroja(5, 14));