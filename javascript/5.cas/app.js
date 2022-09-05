// kondicionali
// u javascriptu if naredba pise na sledeci nacin:

// if (uslov1) {
//     // ako je ispunjen uslov izvrisit odredjeni kod
// }
// if (uslov2) {
//     // ako je ispunjen uslov izvrsiti odredjeni kod
// } else if {
//     //  u slucaju da nije zadovoljen ni prvi ni drugi izvristi odredjeni kod
// }
// na osnovu navedenih godina ispisati u konzoli sledece"
// ako je broj godina od 12:vi ste decijih godina
// ako je broj izmedju 12(ukljucuje) i 18( ne ukljucuje)vi ste maloletni 
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje)vi ste punoletni 
// ako je broj godina veci ili jednak 40"vi ste yrela osoba 
// ako korisnik nije uneo broj :niste uneli broj godina
// // 
// const Brojgodina = Number(prompt("unesite svoju starost"));

// if (Brojgodina<12) {
//     console.log("vi ste decijeg doba.")
// }else if (Brojgodina>=12 && Brojgodina<18) {
//     console.log("vi ste maloletni")
// }else if (Brojgodina>=18 && Brojgodina<40) {
//     console.log("vi ste punoletni")
// }else if (Brojgodina>=40){
//     console.log("vi ste zrela osoba")
// }else {
//     console.log("niste uneli broj godina")
// }

// Uslov za parnost broja je :
// broj % 2 === 0 je paran
// broj % 2 !== 0 je neparan

// napisati prpogram koji proverava da li je uneti broj od strane korisnika
// paran ili neparan i ispisuje odgovarajucu poruku.

// const nekiBroj =Number(prompt("unesite broj")) 

// if (nekiBroj % 2 === 0){
//     console.log("uneli ste paran broj")
// }else if (nekiBroj % 2 !==0){
//     console.log("uneli ste neparan broj ")
// }console.log("niste uneli broj")

// napisati program koji ako je uneti broj veci od 0 stampa poruku broj  je pozitivan u suprotnom broj je negativan .

// const broj1 = Number(prompt("unesite broj"))

// if (broj1 < 0) {
//     console.log("broj je negativan")
// }else if (broj1 ===0 ){
//     console.log("broj je nula")
// }else if (broj1 > 0){
//     console.log("uneto nije broj ")
// }

// switch naredba :
// switch (izraz){
//     case x:
//         // blok koda
//         break;
//         case y:
//             // blok koda
//             break;
//             case z:
//                 // blok koda
//                 break;
//                 default:
                    // blok koda
// }
// ako je zadovoljen slucaj x izvrsice se 66. linija koda
// ako nije prelazimo na sledeci slucaj...
// kad se dodje do break rezervisane reci switch naredba prestaje da se izvrsava.
// ako se izostavi break to znaci da ce se izvrsiti linija koda od sledeceg slucaja 
// koji zapravo nije zadovooljen i to nije nesto sto zelimo da se desi.
//  default rezervisana rec odredjuje kod koji ce se izvrsiti ako nijedan od prethodnih slucajeva nije zadovoljen

// korisnik unosi broj koji mora biti izmedju 12 i 15 .ukljucuju se oba .
// koristeci switch naredbu izvrsiti ispis u konzoli broj koji je korisnik uneo pod
// zadovoljenim usloovom.

// const broj2 = Number(prompt("unesite broj izmedju 12 i 15"));
// switch (broj2) {
//     case 12:
//         console.log(broj2)
//         break;
//         case 13:
//         console.log(broj2)
//         break;
//         case 14:
//             console.log(broj2)
//             break;
//             case 15:
//                 console.log(broj2)
//                 break;
//                 default:
//                     console.log("niste uneli pozeljan broj")
// // }
// const broj = Number(prompt("unesite broj"));
// const broj2 = Number(prompt("unesite broj"));
// if (isNaN(broj1)|| isNaN(broj2)){
//     console.log("niste uneli fate podatke")
// }else if (broj===broj)
// console.log("povrsina kvadrata iznosi", broj * broj)
// if (broj!== broj2)
// console.log("povrsina pravogaunika iznosi", broj * broj2)

constbrojx =Number (prompt("unesite broj x:"));
constbrojy =Number(prompt("unesite broj y:"));
if (brojy !== 0){
console.log(brojx/brojy);
} else if (brojy !== 0){
    console.log("deljenje je nemoguce");x   
}

// const broj1=Number(prompt("unesite broj izmedju 12 i 14"));
// switch (broj1){
//     case 12:
//         console.log(broj12)
//         break;
//         case 13:
//             console.log(broj13)
//             break;
//             case 14:
//                 console.log(broj14)
//                 break;
//             default:
//                 console.log("niste uzeli pozeljan broj")
            
// }











