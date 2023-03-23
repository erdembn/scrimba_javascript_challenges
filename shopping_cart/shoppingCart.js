import shoppingCart from "./data.js";



function total(arr) {

    return arr.reduce((total, { price }) => total + price, 0).toFixed(2)
}

/// another way to do it
// function total(arr){
//     const total = arr.reduce((acc, curr) => {
//         return acc + curr.price;
//     }, 0);

//    return total.toFixed(2);
// }

console.log(total(shoppingCart));
