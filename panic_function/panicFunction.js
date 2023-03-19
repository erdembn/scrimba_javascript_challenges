function panic(str) {
    const sentence = str.split(" ").join(" 😱 ").toUpperCase();
    return sentence;
}


console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"))