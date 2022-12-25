// Domaci zadatak.
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.


const punoletnost = new Promise((resolve, reject) => {
    const osoba = {
        ime: "Ahmed",
        prezime: "krkmisevic",
        godine: 19,
    };
    if (osoba.godine > 17) {
        resolve("vi ste punoletni")
    } else {
        reject(osoba.godine);
    }
});
punoletnost.then((arg) => console.log(arg)).catch((arg2) => console.log(`imate ${osoba.godine}godina`));