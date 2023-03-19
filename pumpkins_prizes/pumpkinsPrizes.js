const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90],
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟", "💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr) {
    return arr.flat()
}

// function flatten(arr){
//     return arr.reduce((acc, val) => acc.concat(val), []);

// }

// function flatten(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             newArr = newArr.concat(flatten(arr[i]));
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }


console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
