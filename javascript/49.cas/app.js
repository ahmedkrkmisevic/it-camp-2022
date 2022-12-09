//sortirati niz premaa title:

var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
    },
];
function sortbyTitle(arr) {
    const newArr = arr.map((el) => el.title);
    newArr.sort();
    const newArr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.find(el => el.title === newArr[i])) {
            newArr2.push(arr.find((el) => el.title === newArr[i]));
        }
    }
    return newArr;
}
console.log(sortbyTitle(library));
//   niz = ["c","b","a"];
//   niz2 =[2,1,3,45,-2,35];
//   console.log(niz.sort());
//   console.log(niz2.sort().reverse());


//iz poslatog niza vratiti 3.niz koji ce sadrzati one elemente iz oba 
// niza koja nisu sadrzani u onom drugom nizu.

const treciNiz = (niz1, niz2) => {
    const noviNiz1 = niz1.filter((element) => !niz2.includes(element))
    const noviNiz2 = niz2.filter((element) => !niz1.includes(element))
    return [...noviNiz1, ...noviNiz2];
}
console.log(treciNiz([1, 2, 3, 4], [3, 4, 5, 6]));