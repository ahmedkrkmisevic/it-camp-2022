const niz = [-9, -78, 4, 17, -22, -5, 7, 6, 10, 18]

const firsttask = (arr) => {
    const filtered = arr.filter((element) => element > 2)
    const mapped = filtered.map((element) => {
        // uslov ? za izvrsavanje :ar koja se inace izvrsava   
        return element < 8 ? (element * 4) / 2 : element * 7
    });
    const lessthan10v = mapped.filter((element) => element < 10)
    return lessthan10v;
};
console.log(firsttask(niz));

// firsttas,second way
// dozvoljeno je odjednom primeniti vise metoda!!!!!!!!!!!!!!


// const firsttasks = (arr) = {
//     const lessthan10v = arr.filter((element) => element > 2).map((element) => {
//         return element < 8 ? (element * 4) / 2 : element * 7;
//     })
//     .filter((element) => element < 10);
//     return lessthan10v;
// };







