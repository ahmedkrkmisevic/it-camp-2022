let random = Math.floor(Math.random() * 51) + 50;

console.log(random);

// java script date objects//

//datumi se prave uz sintaksu :
new Date()

//postoje 4.nacina da dobijemo neki datum :

//1.nacin je new date ()-vraca trenutno vreme 

let datum = new Date();
console.log(datum);

//2.new date (godina,"mesec",dan,sat,minut,sekund,milisekund)-vreme kakvo smo definisali
//javascript mesece racuna od 0 do 11
//ovaj nacin je validan ako imamo bar dva argumenta a maksimum 7
let datum2 = new Date(2003, 4, 14, 23, 45, 15, 30);
console.log(datum2);

let datum3 = new Date(2003, 3);
console.log(datum3);

//3.new date (milisekunde)

let datum4 = new Date(-1); // dodaje ovu vrednost na datum 1970-01-01
console.log(datum4);

//4.nacin zapisivanja new date("")

let datum5 = new Date("2015-03-25");
console.log(datum5);

//ako u prvom argumentu (godina) stavimo samo dve cifre ,javascript to posmatra kao
//prosli vek ,te automatski tim dvema ciframa prethodi 19..

let datum6 = new Date(26, 7, 21);
console.log(datum6);

//javascript skladisti datume kao broj milisekundi.

//prikazivanje datuma:

//postoji nekoliko metoda za prikazivanje datuma.sintaksa je:datum.method()

//1.datum.tostring()

let datum7 = new Date(20, 7, 21);
console.log(datum7.toString());

//2.
let datum8 = new Date(20, 7, 21);
console.log(datum8.toUTCString());

//date.parse(datum)-vraca razliku u milisekundama izmedju datuma koji predstavlja
//argument funkcije i 01-01-1970
console.log(Date.parse(1975, 12, 5));

//postoje metode za dobijanje parametara nekog datuma 
//kao i metode za menjanje nekog datuma.

//get date metode 

//1. getfullyear()

let trenutno = new Date()
console.log(trenutno.getFullYear());

//2.getmonth()

//3 getdate()

//4 getohurs

//5 getminutes()

//6 getseconds()

//getmiliseconds()

//gettime () - vraca broj milisekundi izmedju 01-01-1970 i datuma (argumenta funkcije)

//9. getday()- vraca dan u nedelji 0-6