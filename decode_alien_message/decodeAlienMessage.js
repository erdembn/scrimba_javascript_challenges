
const title = ":htraE no od ot ffutS";
const messages = [
    "maerc eci yrT",
    "rewoT leffiE tisiV",
    "noom eht ot snamuh etacoleR",
    "egrahc ni stac tuP",
]



function reverseString(arr) {
    return arr = arr.split("").reverse().join("")
    // let newArray = []
    // for (let i = 0; i < arr.length; i++) {
    //     let word = arr[i].split("").reverse().join("")
    //     newArray.push(word)
    // }

    // return newArray.join(" ")
}


function reverseStringsInArray(arr){
   return  arr.map(arr => reverseString(arr))
}

// function reverseStringsInArray(arr) {
//     let newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i].split(" ").reverse().join(" ")
//         newArray.push(word)
//     }

//     return newArray.map(sentence => reverseString(sentence))
// }

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));
