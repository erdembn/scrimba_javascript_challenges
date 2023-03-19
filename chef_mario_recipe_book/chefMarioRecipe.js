const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon",
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli",
    "🧀 cheese",
    "🥦 broccoli",
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr) {

    const uniqueItems = [...new Set(arr)];
    return uniqueItems;

}

console.log(removeDupesFromArray(eggScrambleRecipe)); 