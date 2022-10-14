// array metode/

//push () metoda na najlaksi nacin dodaje element nizu na poslednjem mestu.

const voce = ["jagoda", "mandarine", "ananas", "banana"]

voce.push("mango") //vraca duzinu niza nakon sto se doda odredjeni element

console.log(voce[3]);

//push()metoda moze dodati vise elemenata u nizu .
voce.push("kivi", "p0marandza", "jagoda")
console.log(voce);

//novi nacin dodadvanja elemnta na poslednjem mestu .

voce[voce.length] = "kupina"
console.log(voce);

//jos jedan razlog zasto treba izbegavati new array() prilikom dodavanja niza

let brniz = [55]
console.log(brniz);

let brniz2 = new Array(44)
console.log(brniz2);
console.log(brniz2[23])
console.log(brniz2.length)

//za prevodjenje niza unutar stringa se koristi metoda tostring().

let vocestring = voce.toString()
console.log(vocestring);

//jos jedan nacin prevodjenja niza u string.sa dodatnim mogucnostima.
//vraca string preveden kao kod tostring()
let vocestring2 = voce.join("") //vraca nam string gde izmedju elemenata niza nema zareza
console.log(vocestring2);

//rucno pravljenje join("_")metode

const joinmanual = (arr) => {
    let arrstring = ""
    for (let element of arr) {
        arrstring += element + "_"
    }
    return arrstring
}
console.log(joinmanual(voce))

//pop ()metoda se koristi za brisanje poslednjeg elementa niza.

let kupovina = voce.pop() //vraca iybrisani string

// console.log(voce)
// console.log(banana);

//unshift() metoda dodaje element na prvom mestu u nizu.

let duzina = voce.unshift("grozdje") //vraca duzinu niza sa unetom tresnjom u nizu 
console.log(voce);
console.log(duzina)

voce.unshift("tresnja", "bostan", "sljiva") // moze dodati vise elemenata na pocetku niza 
console.log(voce)

voce.shift() // shift metoda se kosristi za brisanje prvog elemnta niza
console.log(voce)


