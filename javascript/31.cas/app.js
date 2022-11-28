const brojevi = [13, 20, 30, 12, 32143]
// const max = (arr) => {
//     let maximum = Number.NEGATIVE_INFINITY
//     for (let number of arr) {
//         if (number > maximum) {
//             maximum = number
//         }
//     }
//     return maximum
// };
// console.log(max(brojevi));

const max = (arr) => {
    let maximum = Number.NEGATIVE_INFINITY
    for (let number of arr) {
        if (number > maximum) {
            maximum = number
        }
    }
    return maximum
};
console.log(max(brojevi));