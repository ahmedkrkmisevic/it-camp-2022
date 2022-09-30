// javascript number metode:

// toString () - metoda vraca broj kao string.
let x = 55
console.log(x);
console.log(typeof x);

let y = x.toString()
console.log(y);
console.log(typeof y);

// toExponential()- metoda nam vraca broj zapisan u obliku 
// (123e5),ciji tip je zapravo string.
let z = 14000;
let w = z.toExponential()
console.log(w);
console.log(typeof w);

// toFixed () metoda ce zaokruziti neki broj na onoliko decimala 
// u zavisnosti  od toga koji broj se nadje kao argument date metode.

let prom = 22.4569
let prom2 = prom.toFixed(2)
console.log(prom2);

// toPresicion m() metoda ce yapravo pretvoriti nas broj u broj
//  koji ukupno ima onoliko cifara,
//   u zavisnosti  od toga koji broj se nadje kao argument date metode.

prom = 22.4569;
let prom3 = prom.toPrecision(5)
console.log(prom3);

// valueOff () metoda nam vraca vrednost datog argumenta.

let prom4 = 25;
console.log(prom4.valueOf(25));

// valueoff () metoda se moze  primeniti na svaki tip podatka.
// ne samo na number tip podatka.

// glo0balne javascript metode

// globalne javascript metode mogu biti koriscene na sve tipove podataka

// najpoznatije globalne metode su :

// 1.number () vraca nam broj kovertovan iz argumenta.

console.log(Number("55465"));
console.log(Number(false));
console.log(Number("41"));
console.log(Number("41 56"));
console.log(Number("41s"));

// 2.parseInt () metoda nam analizira argument i vraca broj 
// u decimalnom zapisu.

console.log(parseFloat("55465"));
console.log(parseFloat(false));

// parsefloat zapravo analizira prve karaktere sve doke ne dodje do razmaka ili nekog
// znaka koji nije broj .
// i onda pretvori te pocetne brojeve u jedan number.

// dok u slucaju da je prvi karakter neki znak ili slovo
// rezultat ce biti nAn.




