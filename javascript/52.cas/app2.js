// Javascript Sets//

// setovi predstavljaju kolekciju unikatnih vrednosti.
// svaka vrednost se pojavljuje samo jednom.

// kreiranje seta:

const letters = new Set(["a", "b", "c", "d", "e", "a"]) // nema drugog "a"
console.log(letters);

//metode:
// add() - dodaje novi element u setu 
letters.add("m")
console.log(letters);

// delete()- brise specifican element u setu.
letters.delete("m")
console.log(letters);

// has()- vraca boolean da li se neka vrednost nalazi u setu
// letters.has("m")
console.log(letters.has("m"));

//forEach()- poziva callback funkciju za svaki element

letters.forEach((element) => console.log(element));

// values() - vraca iterator sa vrednostima datog seta
console.log(letters.values());

// napraviti funkciju koja iz datog niza vraca novi niz brisuci duplikate originalnog niza 

// const niz = ["a", "b", "c", "d", "d", "a"]
// function mojaFunkcija2() {
//     noviNiz = niz.new Set

// }
// console.log(mojaFunkcija2(noviNiz));

const brisiDuplikate = (arr) => {
    const set = new Set(arr)
    return [...set];
};
console.log(brisiDuplikate([1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 7, 7,]));

