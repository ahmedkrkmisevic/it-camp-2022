const abdurahman = "abdurahman"
const selimovic = "selimovic"
const godine = 14
const skola = "bratstvo"

const person = {
    abdurahman: abdurahman,
    selimovic: selimovic,
    godine: 14,
    skola: skola,

};
console.log(person);
const person2 = {
    abdurahman,
    selimovic,
    godine,
    skola,
};
console.log(person2);
// destructuring
const automobil = {
    marka: " audi",
    model: "q7",
    boja: "bela",
};
console.log(automobili.model);
const { marka, model } = automobil; //destructuring
console.log(marka, model);