// Napraviti niz objekata, gde ce svaki objekat sadrzati:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC.
//  Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon,
// i koji nisu polozili C.

const person = [
    {
        ime: "Ahmed",
        prezime: "Krkmisevic",
        starost: 19,
        bojaOciju: "plava",
        polozenC: true
    },
    {
        ime: "Imran",
        prezime: "hazirovic",
        starost: 19,
        bojaOciju: "zelena",
        polozenC: true,
    },
    {

        ime: "Vahid",
        prezime: "gasanin",
        starost: 18,
        bojaOciju: "braon",
        polozenC: false
    },
    {
        ime: "muhamed",
        prezime: "Krkmisevic",
        starost: 17,
        bojaOciju: "braon",
        polozenC: false,
    }
];

napravinovi = function () {
    let noviNiz = [person.filter((element) => {
        return element.bojaOciju === "braon" && element.polozenC === true
    })]
    return noviNiz;
};
console.log(person);
console.log(napravinovi());
