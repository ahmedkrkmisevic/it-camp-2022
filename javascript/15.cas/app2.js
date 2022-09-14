// trim() metoda brise sve bezpotrebne razmake na pocetku i kraju stringa

let recenica = "   neka dugacka recenica.    "
console.log(recenica);
console.log(recenica.length);
let skracenarecenica = recenica.trim()
console.log(skracenarecenica);
console.log(skracenarecenica.length);

// postoje tri metode za ekstraktova nje stringova.

// 1.charAt (position)
// 2.charcodeAt(position)
// 3.pristupanje preko []

// console.log(skracenarecenica.charAt(13));charat metoda vraca prazan string .
console.log(skracenarecenica.charcodeAt(13));
// console.log(skracenarecenica[13]);vraca underfined.
// pristupanje nepostojecem indeksu se odrazava razlicito u zavisnosti od toga da li koristimo metodu charat ili pristupamo preko [].
