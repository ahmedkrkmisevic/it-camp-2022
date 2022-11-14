const student = {
    ime: "Ahmed",
    prezime: "Krkmisevic",
    brojIndeksa: "035029",
    ocene: [7, 9, 8, 10, 6, 5],
    ProsekOcena: function () {
        const brojOcena = this.ocene.length;
        const suma = this.ocene.reduce((previousValue, currentValue) => previousValue + currentValue
        );
        const prosek = suma / brojOcena;
        return `prosek trenutnih ocena ${this.ime}a ,${this.prezime}a, je ${prosek}.
        `;
    }
};
console.log(student.ProsekOcena());

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
    // povecanjeBrzine:function (p) {
    // {

    //         this.trenutnaBrzina+=p;
    //         if (this.trenutnaBrzina<=260) {
    //         console.log( `brzina je ${this.trenutnaBrzina}km/h.`)
    //         }else{
    //         console.log(`Ne mozete ici ${this.trenutnaBrzina}km/h jer je vasa maximalna brzina 260km/h`)
    //     }
    // }
    smanjenjeBrzine: function (s) {
        this.trenutnaBrzina -= s;
        if (this.trenutnaBrzina >= 0) {
            console.log(`Vasa brzina je ${this.trenutnaBrzina}km/h.`)
        } else
            console.log(`Ne moze ici ${this.trenutnaBrzina}km/h jer je vasa minimalna brzina 0km/h`)
    }
};

// myCar.povecanjeBrzine(210);
myCar.smanjenjeBrzine(30);
// console.log(myCar.trenutnaBrzina);