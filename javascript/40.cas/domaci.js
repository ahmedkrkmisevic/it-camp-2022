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