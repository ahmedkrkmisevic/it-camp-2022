// const je skraceno od constant i njoj se vrednosti ne menjaju.global scope globalne
// var je varijabla odnosno promenljiva .global scope ,globalne
// let je promenljiva unutar jednog bloka koda.

// let random = "random text";

// const randomFn = () => {
//     let random = "random";
//     console.log(random)
// }
// randomFn();
const randomObj = {
    name: `elmaz`,
    Lname: `niksic`,
    city: `novi pazar`,
    age: 26
};

// destrukturizacija objekata = object destruction
// razlaganje delova objekata na zasebne promenljive

// const {name,Lname,city,age}=randomObj;-dobra praksa.


// randomObj.age = 27;

const newObj = {
    ...randomObj,
    age: 26,
};

if (newObj.age === 27) {
    console.log(newObj);
} else {
    console.log("eror");
}

newObj.age === 27 ? console.log(newObj) : console.log("eror");

// console.log(newObj);

// = - inicijalizacija(dodela)vrednosti promenljivoj.
// == - provera tacnosti(vrednosti).
// === / provera tacnosti(vrednosti) i tipa.

// class based componets su komponente bazirane na klasama i metodama.

// += povecava i dodaje vrednost
// ++ increment (dodaje za 1)