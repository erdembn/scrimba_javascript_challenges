function isAnagram(str1, str2) {

    if (str1.length === str2.length) {

        str1 = str1.split("").sort().join("");
        str2 = str2.split("").sort().join("");

        if (str1 === str2) {

            return true;
        }
    }
    return false;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("elbow", "below"));
