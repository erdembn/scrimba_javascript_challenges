function countChars(str) {

    const count = {};
    str = str.replace(" ", "").toLowerCase();
    str.split("").forEach(char => {
        if (count[char]) {
            count[char] += 1;
        } else {
            count[char] = 1;
        }
    });

    return count;

}

console.log(countChars("Peggy Porth"));
console.log(countChars("aaabbbcccA"));