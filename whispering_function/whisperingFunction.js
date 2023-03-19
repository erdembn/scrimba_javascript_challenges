function whisper(str) {
    let sentence = str.toLowerCase();

    if (sentence.endsWith("!")) {
        sentence = sentence.slice(0, -1);
    }

    return `sss... ${sentence}`;
}


console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));