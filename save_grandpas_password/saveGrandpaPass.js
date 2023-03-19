const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

//remove duplicate characters from the giving string

function removeDupeChars(chars) {

    return [...new Set(chars)].join("")

}

console.log(removeDupeChars(password));
console.log(removeDupeChars("aaabbbccc"))
