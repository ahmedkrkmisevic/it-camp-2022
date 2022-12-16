// Javascript Maps//

// mape sadrze - key value parove gde kljucevi mogu biti bilo koji tip podatka.

// Mape pamte originalni redosled elemanata.

// Kreiranje mape :

const fruits = new Map([
    ["apple", 60],
    ["bananas", 150],
    ["strawberry", 320],
    ["mango", 440]
]);
console.log(fruits);

// metode:

//set() - podesava vrednost za odredjeni kljuc u mapi 
fruits.set("pear", 40);
console.log(fruits);

// get() vraca vrednost za odredjeni kljuc 
console.log(fruits.get("pear"));

// delete() - brise ceo element slanjem njegovog kljuca

fruits.delete("pear")
console.log(fruits);

// has()- vraca boolean u zavisnosti od toga da li kljuc postoji u mapi ili ne.
console.log(fruits.has("pear"));

// forEach ()-poziva callback funkciju z asvaki key value par.
fruits.forEach((key, value) => console.log(key, value));

// entries() - vraca iterator u vidu key value parova.
console.log(fruits.entries());

