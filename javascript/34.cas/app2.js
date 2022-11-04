//reduce()metoda vrsi takodje iteraciju kroz svaki element,sa tim sto 
// ona kao rezultat daje jedan broj.
//najcesca primena reduce()metode je kada zelimo sumu elemenata niza.


const korpa = [1600, 900, 1400, 220, 1490];
//u slucaju da kupujemo direktno u radnji.
const zbir = korpa.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(zbir);


//u slucaju da kupujemo online i placa se postrarina od 500.din.
//reduce metoda dozvoljava initial value i ona se upisuje nakon funkcije.
// yapavo kao drugi (opcioni)argument reduce() metode.
//niz.reduce(function(){},initialvalue))
const onlinezbir = korpa.reduce((prev, curr) => prev + curr, 500);
console.log(onlinezbir);

const godine = [15, 14, 19, 18, 17, 18, 20, 13]
//napraviti funkciju koja vraca zbir godina koje su vece od 17.

const punoletni = (arr) => {
    const punoletni = arr.filter((element) => {
        return element > 17
    });
    const zbir = punoletni.reduce((prv, crv) => {
        return prv + crv
    });
    return zbir;
};
console.log(punoletni(godine));

function punoletni2(arr) {
    const zbir = arr.reduce((prev, curr) => {
        if (curr >= 18) {
            return prev + curr;
        } else {
            return prev
        }
    }, 0);
    return zbir;
}
console.log(punoletni2(godine));































































































































