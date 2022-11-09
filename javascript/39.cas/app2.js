// objekti su glavna stvar u javascriptu.
//objekti su promenljive koje mogu sadrzati vise vrednosti.
// oni se zapisuju u name:value paru.Jedan takav par se zove svojstvo.


const car = {
    marka: "bmw",
    godiste: 2004,
    boja: "crna",
};
console.log(car);//ispitivanje objekta

//svojstvima objekta mozemo da pristupimo na 2. nacina
//1.
console.log(car.boja);
//2.
console.log(car["marka"]);

// objekti takodje mogu sadrzati metode.
// metode su sadrzane unutar objekta kao definicija funkcije.

const person = {
    JMBG: 1404003783933,
    IME: "Ahmed",
    Prezime: "Krkmisevic",
    mesto: "Hadzet",
    imeIprezime: function () {
        return this.IME + " " + this.Prezime
    }
}
// this predstavlja referencu na neki objekat.
// this nije promenljiva vec neka rezervisana rec u javascriptu (key word).
// vrednost this se ne moze promeniti.

console.log(person);
console.log(person.JMBG);
console.log(person.imeIprezime());


// napraviti objekat student koji ce da ima vrednosti po zelji svojstava:
// ime, prezime, broj indeksa,
// ocene(niz svih ocena koje student ima u trenutnoj godini),prosek ocena (funkcija koja na osnovu niza ocene vraca prosek datih ocena) 
