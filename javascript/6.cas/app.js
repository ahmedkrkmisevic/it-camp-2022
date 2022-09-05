// ispisati brojeve od 1 do 10 jedan ispod drugog
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// za resavanje ovog i slicnih primera je najednostavnije kooristiti pretlju(brojac)--loop--
// u java scriptu imamo tri petlje preko kojih mozemo izvrsiti nekoliko li nija koda na brzi nacin.

// 1. for petlja:
// u for petlja svakako dozvoljeno koristiti if naredbu prema potrebi
// for(statement1;statement2;statement3){
 // blok koda koji se izvsava u svakoj iteraciji 
// }

// statement1 predstavlja definisanje promenljive koja predstavlja iterator
// statement2 predstavlja uslov,odnosno granicu do koje ce se izvrsavati iteracije
// statement3 predstavlja promenu vrednosti iteratora(to moze biti povecanje ili smanjenje) 


// for (i = 1; i <= 10;i++){
//     console.log(x);
// }

// ispisati sve brojeve od 1do 10,osim broja 2 i broja 5.
// 1.nacin.
// for (let i = 1; i<=10;i++){
//     if (i !== 2 && i !== 5){
//         console.log(i)
//     }
// }

// ako se nadje break rec(key word)unutar petlje, to znaci da od tog trenutka pretlja sa interacxijama odnosno zavrsava se.

// ako se nadje rezervisana rec (keyword)unutar petlje to znaci d ase ta iteracija
// preskace tj.odmah se prelazi na sledecu iteraciju.
// 2.nacin
// for (let i =0; i <=10; i++){
//     if (i ===2 || i ===5){
//         continue;
//     }else{
//             console.log(i);
//             }
// }

// ispisati parne brojeve od 1 do 20.
for (let i =0; i <=20; i++){
    if (i % 2===0)
    console.log(i)



}
for (var z = 2; z <= 20; z += 2){
    console.log(z);
}

