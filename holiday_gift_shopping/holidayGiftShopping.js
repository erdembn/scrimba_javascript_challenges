import products from "./data.js";


function sortProducts(data) {
    // sort the data by price
    const sortedProd = data.sort((a, b) => a.price - b.price)
    const productsArray = {}
    // create an object with the product as the key and the price as the value
    sortedProd.map(prod => {
        productsArray[prod.product] = prod.price
    })
    return productsArray

}


const listByCheapest = sortProducts(products);
console.log(listByCheapest);

