// hoisting

a = 5;

console.log(a);

// let a;deklarisanje nakon inicijalizacije nije dozvoljeno putem let keyword.
// const a;deklarisanje nakon inicijalizacije nije dozvoljeno putem const keyword.
// var a;deklarisanje nakon inicijalizacije  jeste dozvoljeno putem var keyword.

console.log(myfunc())

// hoisting hoce da se izvrsi:
function myfunc() {
    let a = 10;
    return a;
};

// hoisting se nece izvrsiti:
function myArrow() {
    let a = 10;
    return a;
};

// dobra praksa je uvek prvo deklarisati promenljivu (funkciju) pa je tek nakon toga koristiti.
// sve kako bi smo izbegli eventualne greske u kodu.