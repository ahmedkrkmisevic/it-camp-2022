// console.log(myFunc(1, 3));

// ne vazi hoisting za promenljive koje su funckije.
//(definisane na bilo koji nacin )

// var myFunc = function (a, b) {
//     return a * b;
// };

function myFunc() {
    let broj = 4;
    let predmet = "stolica";
    return `u prostoru imamo ${broj} ${predmet}.`;
}
console.log(myFunc());
// Poznata je cinjenica da kada se izvrsi funkcija, sve njene lokalne 
// proemnljive pokupi "garbage" kolektor i one prestaju da postoje u memoriji.
// to nije slucaj ako postoji funkcija koja zahteva korisenje proemnljivih 
//  iz domena druge funkcije.
// to se najcesce  postize ugradjivanjem funkcije unutar
// druge funkcije.

function myFunc() {
    let broj = 4;
    let predmet = "stolica";
    function mySecondfunc(arg) {
        console.log(arg + broj);
    }
    mySecondfunc(10);
    return `to je bio primer Closure u Javascriptu`;
};

// Closure je funkcija koja zahteva koriscenje 
// promenljivih iz domena druge funkcije.
function mojaFunkcija() {
    console.log("pocetak glavne funkcije");
    function mojaSporednafunc() {
        console.log("ovo je radnja sporedne funkcije");
        return 5;
    }
    return mojaSporednafunc();
};
console.log(mojaFunkcija());

