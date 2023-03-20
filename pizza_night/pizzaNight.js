const gameNightFood = {
    "🍕 pizza": 3,
    "🌮 tacos": 10,
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj) {
    let winningItem = "";
    let highestVotes = 0;
    for (let item in obj) {
        if (obj[item] > highestVotes) {
            highestVotes = obj[item];
            winningItem = item;
        }
    }
    return `The winner is ${winningItem} with ${highestVotes}!`
}
// function findTheWinner(obj) {

//     let entries = Object.entries(obj);
//     let sorted = entries.sort((a, b) => a[1] - b[1]).reverse();
//     let winningItem = sorted[0][0]
//     let highestVotes = sorted[0][1]
//     return `The winner is ${winningItem} with ${highestVotes}!`
// }

console.log(findTheWinner(gameNightFood));