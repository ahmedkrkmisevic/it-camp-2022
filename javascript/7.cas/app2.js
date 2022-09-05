// whilw pwtlja nam omogucava iteraciju kroz nekoliko puta(ne moramo znati tacan broj)i u odredjeni uslov
// koji dok god vazi izvrsavace se ta petlja
// sintaksa
// while (uslov){
//     // blok koda za izvrsavanje
// }


// ispisati brojeve od 1 do 5
// let broj = 1;
// while(broj<=5){

//     console.log(broj);
//     broj ++;

// }
// let = broj2 =1;
// while (broj2<=10){
//     if (broj2 % 2 ===0){
//         console.log(broj2);
//     }
//     broj2++

// }
// broj2 = 2;
// while (broj2 <= 10){
//     console.log(broj2);
//     broj2+=2;
// }
let broj3 = 1
let broj4 = Number(prompt("unesite neki broj:"));
if (isNaN(broj4)) {
    console.log(nije)
} else {
    while (broj3 <= broj4) {
        console.log(broj3 ** 2)
        broj3++;
    }
}
