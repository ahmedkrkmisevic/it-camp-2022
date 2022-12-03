// 2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza. 
// Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve. 
// 2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.



DATA1 = [2, 26, 38, 75, 11, 29];
DATA2 = ["a", "b", "c", "d", "e"];
DATA2 = ["a", "b", "c", "d", "e"];

function prviZadatak() {
    const newDATA = DATA1.concat(DATA2)
    const newDATA2 = newDATA.filter((el) => el % 2 == 0)
    newDATA2.unshift(10, 20)
    console.log(newDATA);
    console.log(newDATA2);
    // return `Prvi pomocni: ${[newDATA]}\nDrugi pomocni: ${[newDATA2]}`
    function prviZadatak() {
        const newDATA = DATA1.concat(DATA2);
        const newDATA2 = newDATA.filter((el) => el % 2 == 0);
        newDATA2.unshift(10, 20);
        console.log(newDATA);
        console.log(newDATA2);
        // return `Prvi pomocni: ${[newDATA]}\nDrugi pomocni: ${[newDATA2]}`
    }
    //console.log(prviZadatak());
    //  }
    //  body{
    //     background-color: #faebd7;
    // }
    // body:hover{
    //     background-color: #ff0000;
    // }
    // .prvaklasa{
    //     width: 400px;
    //     height: 300px;
    //     background-color: #00ffff;
    //     margin:50px auto;
    //     margin-top: 150px;
    //     padding:30px;
    //     border: 5px dashed #ff0000;
    //     border-radius: 20px;
    //     box-shadow: 5px 5px 3px rgba(23, 23, 223);
    //     text-align: center;
    //     text-transform: uppercase;
    //     text-indent: 10px;
    // }
    // .prvaklasa h1{
    //     color: #802b07;
    // }

    // .prvaklasa h1:hover{
    //     color: olivedrab;
}
