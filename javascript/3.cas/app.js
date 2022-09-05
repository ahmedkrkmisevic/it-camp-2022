// var
// deklarisanje(ponovno deklarisanje neke promenljive)je dozvoljeno izvrsiti bilo gde u programu

var x = 14;
console.log(x);
console.log("neki string")
var x = 16;
console.log(x);

// let
// redaklaracija(ponovno deklarisanje neke promenljive)za let nije dozvoljeno,ako govorimo
// o istom prostoru na kom je izvrsena prva deklaracija.

let y = 10;
console.log(y)
// let y=19;nece biti doyvoljeno!

// block scope(prostor)nam obezbedjuju let i const keywords:

{
    // console.log(y); nece izvrsiti prikazivanje y jer u block scope nije poznata prethodna deklaracija 
    let y = 19;
    console.log(y);
}

console.log(y);
// let nam ne dozvoljava redaklarciju (ako smo u istom prostoru)
// ali je moguce izvrisiti reinicijalizaciju (dodeljivanje druge vrednosti)


let x = 10;
x = 10;

// const
// promenljive koje su definisane pomocu const
// ne mogu biti ni redaklarisane nii reinicijalizovane.

const w = 16;
// console w = 14; ne moze se redaklarisati
console.log(w);
w = 20;
console.log(w);

// karakteristike koje vaze za let kod block scopea vaze i za promenljive definisane putem const.

// let dozvoljava sledece :
let prom ;
prom = 40;

// const je striktna i kod nje se mora odjednom izvrsiti deklaracija i inicijalizacija.
const prom2 = 50

// const ne dozvoljava reinicijalizaciju odnosno (ponovno dedeljivanje vrednosti)
// Medjutim mozemo izvrsiti neke izmene kada se radi o nizu ili objektu
// /(izmene u smislu da se promeni vrednost nekog elementa  da se doda element..)

