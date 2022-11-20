//call(), apply(), bind() su funkcije koje koristimo u slucajevima kada 
// zelimo da se neka funkcija primeni na objekat koji se izvan date funkcije.
// Prodjimo svaku od njih kroz sledeci primer:

const person = {
    firstName: "Muhamed",
    lastName: "Krkmisevic",
    dateOfBirth: new Date(2005, 5, 13),
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(person.fullName());

const person2 = {
    firstName: "Muusa",
    lastName: "Zecirovic",
    dateOfBirth: new Date(2006, 8, 12),
};
console.log(person2);

// Sintaksa za koriscenje ovih funkcija je:
// PRVO IDE POZIVANJE FUNKCIJE, PA ONDA KAO ARGUMENTI FUNKCIJE IDU:
// 1. OBJEKAT NA KOJI ZELIMO DA SE PRIMENI DATA METODA;
// 2. EVENTUALNE ARGUMENTE FUNKCIJE (ako funkcija po definiciji zahteva).

console.log(person.fullName.call(person2));

const restoran = {
    hrana: "pizza",
    gosti: "zadovoljni",
    lokacija: "Uzi centar grada",
};

function poruka(grad, drzava) {
    return `Vecerasnji specijalitet naseg restorana je ${this.hrana}. I sa ponosom mozemo reci da su gosti ${this.gosti}. Nas restoran se nalazi u ${this.lokacija} u ${grad}, ${drzava}`;
}

const restoran2 = {
    hrana: "supa",
    gosti: "zgrozeni",
    lokacija: "Mur",
};

console.log(poruka.call(restoran, "Beograd", "Srbija"));
console.log(poruka.call(restoran2, "Novi Pazar", "Srbija"));

// apply() je vrlo slicna, s tim sto se argumenti funkcije stavljaju unutar niza.

console.log(poruka.apply(restoran, ["Novi Pazar", "Srbija"]));

// bind() funkcionise na nacin da prvo dodelimo datu funkciju sa objektom nekoj promenljivoj i onda tu promenljivu (funkciju) pozovemo sa potrebnim argumentima.

const bindFunction = poruka.bind(restoran2);
console.log(bindFunction("Sarajevo", "Bosna i Hercegovina"));
62
// 1. Zadatak
const radnik = {
    firstName: "Dzenan",
    lastName: "Kosuta",
    fullname: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    adresa: {
        ulica: "avnoja",
        broj: "bb",
        grad: "Novi Pazar",
        getAdress: function () {
            return `${radnik.firstName} ${radnik.lastName} stanuje na adresi ${this.ulica} ${this.broj} ${this.grad}.`;
        },
    },
};

console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

const automobil = {
    marka: "Audi",
    model: "Q7",
    boja: "Bela",
    pogon: "quattro",
    menjac: "Automatik",
    km: 240000,
    vlasnik: ["062321552", "063930630"],
    garaza: {
        parking: "JKP Servis",
        vikend: "od 17 free",
        satnaKarta: "50",
        dnevnaKarta: "200",
        mesecnaKarta: "2000",
        platiZa: function (pocetniDatum, krajnjiDatum) {
            const pocetniDan = pocetniDatum.getDate();
            const krajnjiDan = krajnjiDatum.getDate();
            const ukupnoDana = krajnjiDan - pocetniDan;
            return `Cena parkinga za dati period je ${ukupnoDana * this.dnevnaKarta
                }RSD`;
        },
    },
};

automobil.boja = "crvena";
console.log(automobil);

console.log(
    automobil.garaza.platiZa(new Date(2022, 10, 16), new Date(2022, 10, 21))
);

// console.log(new Date(818035920000));

// const amina = new Date(2003, 11, 8);
// const munevera = new Date(2003, 11, 13);

// const aRazlika = Date.parse(amina);
// const mRazlika = Date.parse(munevera);
// const razlika = Math.abs(aRazlika - mRazlika);
// const datumRazlike = new Date(razlika);
// console.log(datumRazlike);