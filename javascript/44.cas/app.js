const person = {
    ime: "Ahmed",
    prezime: "Krkmisevic",
    starost: 19,
    bojaOciju: "plava",
    polozenC: true,
};

// freeze() metoda cini objekat immutabile 
person.prezime = "marovac"
// console.log(person);
// Object.freeze(person);
// person.prezime = "rec"; // ne menja se jer je objekat "zamrznut"
// console.log(person);
// person.godinarodjenja = 2003;
// console.log(person);



//seal() metoda cini objekat promenljivim ali nije dozvoljeno dodavanje niti brisanje elemenata,
// nije dozvoljeno.

// Object.seal(person);
// person.godinarodjenja = 2003;
// console.log(person);
person.prezime = "besirovic";
// console.log(person);

//  values () vraca niz vrednosti datog objekta.

const vrednosti = Object.values(person);
console.log(vrednosti);

// keys ()vraca niz kljuceva (names)datog objekta

const svojstva = Object.keys(person);
console.log(svojstva);


// entries metoda () vraca niz nizova (svaki podniz je name:value par).
// const parovi = Object.entries(person);
// console.log(parovi);
// const parovi2 = parovi.flat();
// console.log(parovi2);


// is() metoda ispituje identicku jednakost.
console.log(Object.is(person));


