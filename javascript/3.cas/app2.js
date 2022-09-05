// Operatori u javascriptu
// operatori se dele na sledece:
//  1.aritmeticki operatori;
//  2.operatori dodele vrednosti ;
//  3.javascript string operatori;
//  4.operatori poredjenja ;
//  5.logicki operatori;
//  6.tipovni operatori

//  1.aritmeticki operatori;
// +sabiranje;
console.log(5+2)
// -oduzimanje:
console.log(5-2)
// *mnozenje
console.log(5*2)
// **steponovanje
console.log(5**2)
console.log(2**3)
// /deljenje;
console.log(10/2)
// %procenat
console.log(5%2)
console.log(12%2)
console.log(13%5)
// operator++povecanje za 1:
let x = 5;
x++;
console.log(x++);
// smanjenje za 1;
let y = 5
y--;
console.log(y--)

//  2.operatori dodele vrednosti ;
// =jednakost
let a, b;
a = 10;
b = a;
console.log(a)
console.log(b)
// +=
let c = 15;
c += 5;
console.log(c);
// -=
var d = 15;
d -= 5;
console.log(d)

// 3.javascript string operatori;
// za spajanje sringova mozemo koristiti +operator.
// ako izvrsimo dodavanje stringa nekom broju (broja nekom stringu )preko +operatora dobicemo string.
let m,n;
m="danas je bilo"
n = "lepo vreme"
console.log(m+" "+n);
console.log(55+m);

// neke karakteristike vezane za +,-,*,/:
console.log(5+"5");
console.log(5-"4");
console.log(5*"4");
console.log(5/"4");