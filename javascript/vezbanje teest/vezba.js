//Funkcije
//1.nacin
// function myFunction(){
//     return 5;
// }
// console.log(myFunction())
// function myFunction2(){
//     return 3+5;
// }
// console.log(myFunction2());
// function zbirdvaBroja(prviBroj,drugiBroj){//parametri
//     return prviBroj+drugiBroj;
// }
// console.log(zbirdvaBroja(3,5));
// //2.nacin
// const myFunction=function(){
//     //radnja koja se obavlja
// }
// //Defaultna vrednost ide na poslednjem mestu.
// //3.nacin
// const arrowFunc=()=>{
// }
let recenica2 = "Nekad zelimo da se na odredjenom mestu nadje sadrzaj koji nije isti sadrzaj koji je bio pre.";
let recenica3 = recenica2.replace(/sadrzaj/g, "text");
console.log(recenica3);
let recenica4 = "Nekad zelimo da se na odredjenom mestu nadje SadrZaJ koji nije isti SADRZAJ koji je bio pre.";
let recenica5 = recenica4.replace(/sadrzaj/i, "text");
console.log(recenica5);
let recenica6 = recenica4.replace(/sadrzaj/gi, "text");
console.log(recenica6);
// function fourthTask() {
//     let recenica = prompt("Unesite neku recenicu");
//     let malaSlova = 0;
//     let velikaSlova = 0;
//     let duzina = recenica.length;
//     for (let i = 0; i < duzina; i++) {
//     if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
//         malaSlova += 1;
//     } else if (
//         recenica[i] === recenica[i].toUpperCase() &&
//         recenica[i] !== " "
//     ) {
//         velikaSlova += 1;
//     }
//     }
//     if (malaSlova > velikaSlova) {
//     return `U datoj recenici ima vise malih slova, ima ih ${malaSlova}, a velikih ${velikaSlova}`;
//     } else if (malaSlova < velikaSlova) {
//     return `U datoj recenici ima vise velikih slova, ima ih ${velikaSlova}, a malih ${malaSlova}`;
//     }
// }
//console.log(fourthTask());
console.log(18 + "45");//string
console.log("63" + 44);//string
console.log("sd" + 32);//string
console.log("401s" - 46);//nan
console.log(85 / "78a");//nan
console.log(47 - "27");//4727
console.log("lk" * 45);//nan
console.log(typeof (22 - "33"));//-number
console.log(76 - "67");//9
console.log(Number("55465"));
console.log(Number(false));//0
console.log(Number(false + true + true));//2
console.log(Number("41  "));
console.log(Number("41 56"));//Razmaci nisu dozvoljeni //nan
console.log(Number("41s"));//nan
const isPalindrom = function (broj) {
    let stringBroj = broj.toString();
    let obrnutiBroj = " ";
    let duzina = stringBroj.length;
    for (let i = duzina - 1; i >= 0; i--) {
        obrnutiBroj += stringBroj[i];
    } if (stringBroj === obrnutiBroj) {
        return `Dati broj je palindrom.`
    } else {
        return `Dati broj nije palindrom.`
    }
};
console.log(isPalindrom(456));
// function rastojanje(){
//     let AXOsa=+prompt("Unesite kordinatu x za tacku A:");
//     let AYOsa=+prompt("Unesite kordinatu y za tacku A:");
//     let BXOsa=+prompt("Unesite kordinatu x za tacku B:");
//     let BYOsa=+prompt("Unesite kordinatu y za tacku B:");
//     let rastojanjee=Math.sqrt((BXOsa**2 - AXOsa**2)+(BYOsa**2-AYOsa**2));
//     if(isNaN(AYOsa) || isNaN(AXOsa) || isNaN(BXOsa) || isNaN(BYOsa)){
//     return `Uneta vrednost mora biti broj.`
//     }else if(BXOsa<AXOsa){
//         return `Kordinata x kod tacke B mora biti veca od kordinate x kod tacke A.`
//     }else if(BYOsa<AYOsa){
//         return `Kordinata y kod tacke B mora biti veca od kordinate y kod tacke A.`
//     }else{
//     return `Rastojanje izmedju tacaka A i B iznosi ${Math.round(rastojanjee)}`
//     }
// }
// console.log(rastojanje());
// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15",koliko ima dana izmedju ova 2 datuma 
//date.parse
const prviDatum = "24 May 1999";
const drugiDatum = "15 Sept 2004";
function razlika() {
    const prviDatum1 = new Date(prviDatum);
    const drugiDatum1 = new Date(drugiDatum);
    const totalSec = (drugiDatum1 - prviDatum1) / 1000;
    const days = Math.floor(totalSec / 3600 / 24);
    return `Razlika izmedju ${prviDatum} i ${drugiDatum} je ${days} dana.`
}
console.log(razlika())
//1.zadatak Napraviti funkciju koja iz nekog niza brise 
//sve elemente na parnim pozicijama(indeksima),indeks drugi,cetvrti,po redosledu parni
let array1 = ["bela", "crvena", "zuta", "narandzasta", "crna", "plava", "zelena", "roza", "siva", "teget", "ljubicasta"];
console.log(array1)
function prvizadatak(arr) {
    let parniNiz = ""
    for (element in arr) {
        if (element % 2 === 0) {
            parniNiz += arr[element] + " , ";
        }
    }
    return parniNiz;
};
console.log(prvizadatak(array1));
//2.zadatak Napraviti funkciju koja iz nekog niza menja sve elemente na parnim pozicijama recju "paran broj".
function drugizadatak(arr) {
    let parniNiz = ""
    for (element in arr) {
        if (element % 2 !== 0) {
            arr[element] = " paran broj "
        }
        {
            parniNiz += arr[element]
        }
    }
    return parniNiz;
};
//2.zadatak Napraviti funkciju koja iz nekog niza menja sve elemente na parnim pozicijama recju "paran broj".
const secondTask = (arr) => {
    let duzina = arr.length;
    for (let i = 0; i <= duzina; i++) {
        if (i % 2 === 1) {
            arr[i] = "paran broj";
        }
    } return arr
}
console.log(secondTask([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//2.pomocu for petlje naprviti novi niz koji ce sadrzati samo godine vece od 17.
let niz2 = [2, -3, 5, 9, -22, 82, 2, 90, 23, 14, 42, 9, 22, 18];
function noviNiz(arr) {
    let noviNizz = [];
    for (number of arr) {
        if (number > 17) {
            noviNizz.push(number);
        }
    }
    return noviNizz.sort((a, b) => a - b);
};
console.log(noviNiz(niz2));
// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.
//1mil=1.609344 km
function convertMilesToKilometers() {
    array1 = [1, 4, 2, 19, 9, 3, 22];
    const totalDistanceInKilometres = array1.map(function (element) {
        return +(element * 1.609).toFixed(1);
    })
        .reduce((previousValue, currentValue) => (previousValue + currentValue));
    return totalDistanceInKilometres;
}
console.log(convertMilesToKilometers());
//u Fibonacijevom nizu cije vrednosti ne prelaze 4 miliona pronaci sumu parnih elemenata
//Fibonacijev niz je sastavljen na nacin da je element jednak zbiru prethodna dva elementa.
[1, 2, 3, 5, 8, 13];
[1, 1, 2, 3, 5, 8];
const myFunction2 = () => {
    const niz = [1, 2];
    let i = 2;
    while (niz[i - 2] + niz[i - 1] <= 4000000) {
        niz.push(niz[i - 2] + niz[i - 1])
        i++;
    }
    const sumaParnih = niz.filter((element) => element % 2 === 0).reduce((prev, curr) =>
        prev + curr);
    return sumaParnih;
}
console.log(myFunction2())
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.
// const isPalindrom=(broj)=>{
//     const strBroja=broj.toString();
//     let obrnutiStr="";
//     for(let i=strBroja.length-1;i>=0;i-- ){
//         obrnutiStr+=strBroja[i];
//     }
//     const obrnutiBroj=+obrnutiStr;
//     if(obrnutiBroj===broj){
//         return true;
//     }else{
//         return false;
//     }
// };
// const highestPolindrom3=()=>{
//     let palindroms=[];
//    for(let i=100;i<=999;i++){
//     for(let j=100;j<=999;j++){
//         if(isPalindrom(i*j) && !palindroms.includes(i*j)){
//             palindroms.push(i*j);
//         }
//     }
//    }
//    palindroms.sort((a,b)=> b-a );
//    return palindroms[0];
// };
// console.log(highestPolindrom3());
const firstTask = () => {
    const voce = prompt("Unesite listu sa vocem:");
    const nizVoca = voce.split(",");
    if (nizVoca.includes("jagoda")) {
        return `Jagoda se nalazi na ${nizVoca.indexOf("jagoda") + 1}poziciji.`;
    } else {
        nizVoca.sort();
        nizVoca.unshift(10);
        nizVoca.push(100);
    }
    return nizVoca;
}
console.log(firstTask());
console.log(firstTask())
