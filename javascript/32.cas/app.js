// const data1 = [2,26,25,11,99,75]
// const  data2 = ["a","b","c","d","e"]

const numbers = [2, 5, 10, 3, 4, 8];

const noviniz = numbers.map((element) => element ** 2)
console.log(noviniz);

const noviniz2 = numbers.map((element) => +Math.sqrt(element).toFixed(2));
console.log(noviniz2);
console.log(typeof noviniz2[2]);

const numbers2 = [-8, -7, -12, 0, 5, 23, 61];
const noviniz3 = numbers2.map((element, index) => {
    if (index === 0 || index === 3 || index === 5) {
    } return element ** 2;


})
console.log(noviniz3);

// const noviniz4 = numbers.map((element,index)=>{
//     index === 0 || index === 3 || index  ? element **2 :element;
// });


