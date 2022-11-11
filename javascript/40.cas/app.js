// JSON-Javascript  Object Notation.

// najcesce se koristi prilikom slanja podataka sa servera do web  stranice.

//Sintaksa vrlo slicna objektu u Javascriptu:

//Objekat u Javascriptu:
// const student = {
//     IME: "Ahmed",
//     PREZIME: "Krkmisevic",
//     BrojIndeksa: "035029",
//     };

//////////////////////////////////////////////////////////////////////////////

// JSON Format:
// const student = {
//     "IME": "Ahmed",
//     "PREZIME": "Krkmisevic",
//     "BrojIndeksa": "035029",


// Objekti su promenljivi !(mutable)
const person = {
    firstname: "Ahmed",
    lastname: "Krkmisevic",
    JMBG: 1404003893933,
};
// bilo koja promena na x objekat ce takodje promeniti person objekat.
// ovo vazi za neprimitivne tipove podataka,tj. novoj promenljivoj x
// dodeljujemo referencu na objekat person (a ne vrednost).
// identicko izjednacavanje.
const x = person
console.log(x);
console.log(x.firstname);
// x["firstname"] = "muhamed";
x.firstname = "Muhamed";
console.log(x);
console.log(person);

// brisanje svojstva iz objekta se vrsi preko delete keyword:

// delete person["JMBG"]
delete person.JMBG
console.log(person);
// delete brise i name i value.

// vrednost u objektu moze biti:
// neki drugi objekat,
// niz,
// metoda(funkcija)...

// JSON.stringify() metoda nam sluzi za preovodjenje objekta u JSON,nakon toga
// JSON formata u string.

const stringObjekta = JSON.stringify(person)
console.log(stringObjekta);
console.log(typeof stringObjekta);
//JSON.parse nam vraca(ako moze) objekat iz poslatog argumenta. 
console.log(JSON.parse(stringObjekta));
console.log(typeof JSON.parse(stringObjekta));



