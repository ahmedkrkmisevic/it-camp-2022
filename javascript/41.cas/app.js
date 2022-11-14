const myCar = {
    id: 1,
    marka: "Audi",
    model: "a4",
    boja: "Crvena",
    pogon: "prednji",
    menjac: "automatski",
    kontakt: [0622222, 02033322],
    servis: {
        datum: "04,maj",
        km: 23000,
        serviser: "Pasovic",
    },
    udaran: true,
    trenutnaBrzina: 0,
    maksimalnaBrzina: 260,
};

// console.log(myVar["menjac"]);
// console.log(myVar.servis.datum); // ----- nacini pronalazenja namesa u objektu !
// console.log(myVar.servis["datum"]);

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
myCar.povecanje = function (brzina) {
    if (this.trenutnaBrzina + brzina > this.maksimalnaBrzina) {
        console.log(`nije moguce voziti vise od maksimalne brzine`);
    } else {
        this.trenutnaBrzina += brzina;
    }
};

myCar.ukoci = function () {
    this.trenutnaBrzina = 0;
}

//console.log(myCar.povecanje);
myCar.povecanje(300);
console.log(myCar.trenutnaBrzina);
//myCar.ukoci();
//console.log(myCar.trenutnaBrzina);



