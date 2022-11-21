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
        satnaKarta: 50,
        dnevnaKarta: 200,
        mesecnaKarta: 2000,
    },
};
function povecajza20() {
    this.satnaKarta += this.satnaKarta * 0.2
    this.dnevnaKarta += this.dnevnaKarta * 0.2;
    this.mesecnaKarta += this.mesecnaKarta * 0.2;
    return `nove vrednosti za parking karte su: ${this.satnaKarta} ${this.dnevnaKarta} ${this.mesecnaKarta}`
};
console.log(povecajza20.call(automobil.garaza));
console.log(automobil);






