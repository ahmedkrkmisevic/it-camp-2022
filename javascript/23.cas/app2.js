// number properties

// number properties ne mogu biti primenjene na promenljive .
//vec samo pristupanjem preko number.property

//1.MAX_VALUE - vraca najveci moguci broj u javascriptu
console.log(Number.MAX_VALUE);

//2.MIN_VALUE - vraca najmanji moguci broj u javascriptu.

console.log(Number.MIN_VALUE);

//3.positive_infinity - vraca infinty 
console.log(Number.POSITIVE_INFINITY);

//4. NEGATIVE_INFINITY -vraca minus infinity
console.log(Number.NEGATIVE_INFINITY);

//5. NaN - Vraca not a Number vrednost
console.log(Number.NaN);

//zadatak napraviti funkciju koja prima jedan argument (broj) i vraca poruku  da li je dati argument 
// palindrom 



const isPalindrom = function (broj) {
    let stringBroj = broj.toString()
    let duzina = stringBroj.length
    let obrnutBroj = ""
    for (let i = duzina - 1; i >= 0; i--) {
        obrnutaRecenica += stringBroj[i]
    }
    if (stringBroj === obrnutBroj) {
        return `dati broj je polindrom`
    } else {
        return `dati broj nije polindrom`;
    }
};
console.log(isPalindrom(45654));
console.log(isPalindrom(45654));;