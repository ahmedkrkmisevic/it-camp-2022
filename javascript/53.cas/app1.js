console.log(1);
console.log(2);
console.log(4);
console.log(5);
// Pri sinhronom izvršavanju operacija, trenutna operacija mora da se završi da bi naredna počela da se izvršava.
// Dok kod asihronog izvršavanja, operacije ne čekaju jedna drugu da se izvrše, nego se izvršavaju istovremeno.
// Generalno u većini slučajeva sinhronomi procesi nisu problem jer su kompjuteri veoma brzi pa se sve operacije izvršavaju skoro instant.
// Medjutim kod web-a su problem upiti ka serveru. Ukoliko bi ovi procesi bili sinhroni,
// ceo interfejs web aplikacije bi bio “smrznut” dok ne stigne odgovor servera.
// Isto važi za I/O operacije sa podacima. 
//Rezultat toga je da se ukupno asinhrone operacije brže izvršavaju iako svaka pojedinačno ništa nije brža nego kod sinhronih operacija.

function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);