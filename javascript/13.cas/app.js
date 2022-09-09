// stringovi
// stringovi predstavljaju immutable promenljive(promenkjive koje ne mozemo da menjamo).
// ali obicno pri potrebi da izmenimo string cemo definisati novu promenljivu i dodeliti 
// joj karaktere prema postojecoj (obicno koriscenjem for petlje.)
// 1. za pronalazenje duzine stringa se koristi metoda length.
let recenica = "danas je promenljivo vreme."
const duzina = recenica.length;
console.log(duzina);


// prilikom pisanja stringa mozemo naici na problem ako zelimo da se unutar stringa nadju navodnici.
let recenica2 ="\"dva heroja\". naziv je dobila po herojima koji se nizgubili svoje zivote prikilom spasavnja zivota beba."
let recenica3 ="\"dva heroja\". naziv je dobila po herojima koji se nizgubili svoje zivote prikilom spasavnja zivota beba."
let recenica4 ="\"dva heroja\". naziv je dobila po herojima koji se nizgubili svoje zivote prikilom spasavnja zivota beba."
console.log(recenica2);
console.log(recenica3);
console.log(recenica4);

let novarecenica =
"wdjfwkfjewkfjwigwiegwgjwigjwgigjwijgiw \backslash kao deo stringa";
console.log(novarecenica);



