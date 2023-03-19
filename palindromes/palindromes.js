function isPalindrome(str) {
    let reverse = str.split("").reverse().join("")
    return reverse === str

}


console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));