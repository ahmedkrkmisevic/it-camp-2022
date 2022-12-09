const person = {
    firstname: "imran",
    lastname: "hazirovic",
}
console.log(person);

//Svi objekti u JavaScriptu su povezani sa nekim prototype ppbjektom
//  tako da mozemo reci da svaki objekat ima prototip
// prototype je pobjekat koji sadrzi svojstva i metode(properties and methods.)

//2.nacina za pravljenje sablona za objekte:

//1. constructor function (konstruktor funkcije):

function User(firstname, lastname, score) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.score = score;
};

User.prototype.incrementScore = function () {
    this.score += 1;
}
const Imran = new User("imran", "hazirovic", 4);
console.log(Imran);
Imran.incrementScore();
console.log(Imran);

const vahid = new User("vahid", "gasanin", 2);
vahid.incrementScore();
console.log(vahid);

//napraviti constructor funkciju za objekte koji imaju:
// marku,boju,godinu,proizvodnje,udaran.
// nakon toga napraviti prototype funkciju za sve objekte napravljene preko tog
// konstruktora koja pretvara udaran iz false u true.

function napravitiNesto(marka, boja, godinaproizvodnje, udaran) {
    this.marka = marka;
    this.boja = boja;
    this.godinaproizvodnje = godinaproizvodnje;
    this.udaran = udaran;
};
napravitiNesto.prototype.lazedanije = function () {
    this.udaran = true;
}
const nesto = new napravitiNesto("audi", "bela", 2007, false);
console.log(nesto);
nesto.lazedanije();
console.log(nesto);
