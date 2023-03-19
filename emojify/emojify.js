const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat": "🐱",
    "dog": "🐕"
}



function emojifyWord(word) {
    if (word.startsWith(":") && word.endsWith(":")) {
        word = word.slice(1, -1)
        if (word in emojis) {
            return emojis[word]
        }
    }
    return word;
}


function emojifyPhrase(phrase) {
    let arr = phrase.split(" ")
    let newPhrase = arr.map(word => emojifyWord(word)).join(" ")
    return newPhrase;
}



console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
