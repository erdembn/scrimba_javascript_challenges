import products from "./data.js";

function getSaleItems(data) {
    const candiesArray = data.filter(item => item.type === "sweet")
    const shoppingCart = []
    candiesArray.map(candy => {
        shoppingCart.push({
            candy: candy.item,
            price: candy.price
        })
    })
    return shoppingCart
};

console.log(getSaleItems(products))