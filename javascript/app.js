document.getElementById("paragraf").innerHTML =
  "ovo je paragraf dodat od strane java scripta";
// ispisati u konzoli recenicu:
console.log("danas je bilo pretoplo.cekamo septembar.");
// tipovi podataka u JavaScriptu:
// za proveru tipa varijable (promenljive u javascriptu se koristi typeoff operator).
// postoje 1.primitvini (primitive)tipovi podataka.
// 2. neprimitivni(non-primitive)tipovi podataka;
// 1.1 String-niz karaktera koji sen upisuje unutar navodnika.
//  on moze biti zapisan  unutar obicnih ili duplih navodnika(NIJE )
// stringovi mogu biti bilo koji karakteri a-z,0-9
// zapisivanje stringa:
("danas je toplo");
("danas je padala kisa");
`danas je padao sneg`;
String("danas je duvao jak vetar");

// 1.2 Number-predstavlja broj u javascriptu.
// on moze biti zapisan sa decimalom ili bez nje.
// javascript ne razlikuje tipove kod brojeva,vec su svi brojevi number tipa.
// zapisivanje brojeva:
10;
0 - 78;
1.14;
0.9999555454;
Number(45);

// 1.3 BigInt-ovaj tip podatka nam sluzi za skladistenje brojeva cija vrednost prelazi granicu Number tipa podatka.
BigInt(934839843984438948394);

// 1.4 boolean-predstavlja logicki entitet i on moze imati  dve vrednosti:
// 1.true;
// 2.false.
// najveca primena ovog tipa podatka se nalazi u kondicijonalima ,u slucajevima ispitivanja da li je odredjeni uslov zadovoljen ili ne.
// zapisivanje booleana:
// Boolean("odredjeni uslov ") kao izlaz dobijamo true ili false

// 1.5 undefined -kada odredjenu promenljivu deklarisemo ali joj ne dodelimo vrednost.
//    tada undefined predstavlja i vrednost i tip za tu promenljivu .
// 1.6 null-tip podatka null se javlja za nepostojecu ili promenljivu koja nije validna .

console.log(typeofx);
// 1.7-symbol-to je novi tip podatka u javascriptu.
// koristi se za anonimne i jedinstvene vrednosti.
Symbol("kako je bilo vreme");
// 2. Ne primitivni tipovi podataka(non-primitive data types).
// primitivni tipovi podataka se koriste za skladistenje promenljivih (varijabli)
// koje imaju jednu vrednost.
// dok za promenljive koje sadrze vise vrednosti i(ili kompleksne vrednosti )koristimo neprimituvne tipove podataka.(non-primitive data types)

//primeri ne primitivnih tipova podataka:

// 2.1  array (nizovi)-nizovi se koriste za skladistenje vise podataka unutar jedne promenljive.
// nizovi u javascriptu imaju mogucnost skladistenja elemenata razlicitih tipova podataka.
// zapisivanje nizova:
["ahmed,talib,imran"][("talib", 15, false, "ahmed", 19, true)];
// 2.2.object(objekti)-objekti  su GLAVNA STVAR U PROGRAMSKOM JEZIKU JAVA SCRIPT.
// objekti sluze za skladistenje nekih podataka i oni e zaoisuju u tom principu kljuc vrednosti (name,value)par.
// zapisivanje objekata:
// {marka:"renault",
// godinaproizvodnje:2006,
// boja:"crna",
// kubikaza:"2000ks",
// 2. nazin za zapisivanje nizova(nacin koji nije preporucljiv za koriscenje)
new Object({ punoletnost: false, ime: "ahmed", starost: 19 });
//
// 2.3 set(setovi)-setovi su slicni nizovima sa razlikom kod zapisivanja
// i izmedju ostalog najbitnije karakteristika kod setova
// da oni ne mogu imati duplikate.
// zapisivanje setova:
new set(["sljiva", "jabuka"]);
//2.4 maps(mape)- predstavljaju se ne primitivni tip,koji je vrlo slican setovima
// ali zapisivanje s eizvrsava na nesto drugaciji nacin.
// zapisivanje mape:
Map([["apples", 500][("bananas", 300)]]);

