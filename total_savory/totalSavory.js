import shoppingCart from "./data.js";



function totalSavory(arr) {
    const filteredArr = arr.filter(item => item.type === "savory")
    const total = filteredArr.reduce((acc, { price }) => acc + price, 0)
    return total.toFixed(2)
}

console.log(totalSavory(shoppingCart));

