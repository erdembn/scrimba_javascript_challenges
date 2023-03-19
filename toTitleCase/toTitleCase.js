function capitalizeWord(word) {

    //Also substr can be used instead of slice
    word = word[0].toUpperCase() + word.slice(1)

    return word;
}


function toTitleCase(str) {
    let array = str.split(" ")
    let sentenceArray = []
    for (let i = 0; i < array.length; i++) {
        let newWord = capitalizeWord(array[i])
        sentenceArray.push(newWord)
    }

    return sentenceArray.join(" ")
}

console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));