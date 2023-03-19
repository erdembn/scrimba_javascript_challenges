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

//another way to do it

// function removeDupesFromArray(arr) {

//     const uniqueItems = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueItems.includes(arr[i])) {
//             uniqueItems.push(arr[i]);
//         }
//     }
//     return uniqueItems;
// }

console.log(removeDupesFromArray(eggScrambleRecipe)); 