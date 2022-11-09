// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// };

// Rekurzija -Pozivanje funkcije unutar itse.
// Moze se postici efekat petlje.

function ispisivanje(n) {
    console.log(n)
    if (n - 1 > 0) {
        return ispisivanje(n - 1);
    }
};
(ispisivanje(10));

//callback funkcija predstavlja funkciju koja se nadje kao argument
// neke druge funkcije ili metode.
// let talib = "talib"
// function main(func) {
//     console.log("ovo je kod koji se izvrsava unutar glavne funkcije")
//     func(talib);
// }

// // callback funkcija:

// function callback(arg1) {
//     console.log(`Pozdrav ljudi ja sam novi clan grupe,moje ime je ${arg1} `);
// }
// main(callback);


// let ahmed = [3 + 5 + 7]
// function main2(func) {
//     console.log("ovo je ARitmeticka sredina")
//     func([3 + 5 + 7]);
// }
// function callback2(arg3) {
//     console.log(`pozdrav aritmeticka sredina broja 15 je ${ahmed / 3}`)

// }
// main2(callback2);

function main2(func) {
    console.log("ovo je kod koji se izvrsava unutar glavne funkcije");
    func(1, 3, 3)

}

function averageValue(arg1, arg2, arg3) {
    let average = +(((arg1 + arg2 + arg3)) / 3).toFixed(2);
    console.log(`aritmeticka sredina je:${average}`);
}
main2(averageValue);







