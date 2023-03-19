
function altCaps(str) {

    let strArray = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            strArray.push(str[i].toUpperCase())
        }
        else {
            strArray.push(str[i])
        }

    }
    let newStr = strArray.join("")
    return newStr
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));